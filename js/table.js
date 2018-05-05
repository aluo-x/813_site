function generateAnimalTable() {
  generateTable('animal', animalColumns, parseServerResponseWithDocumentParser(animalDocumentParser));
}

function generatePersonTable() {
  generateTable('person', personColumns, parseServerResponseWithDocumentParser(personDocumentParser));
}

function generateEventTable() {
  generateTable('event', eventColumns, parseServerResponseWithDocumentParser(eventDocumentParser));
}

const BASE_DATA_URL = 'https://firestore.googleapis.com/v1beta1/projects/all-paws-on-deck/databases/(default)/documents/';

const getTableId = (entityType) => '#' + entityType + 'Table';

function generateTable(entityType, columns, parseServerResponse) {
  console.log("entityType",entityType);
  var unorderableTargets = [0];
  if(entityType === "event") {
    unorderableTargets = [];
  }
  console.log(unorderableTargets);
  var table = $(getTableId(entityType)).DataTable({
    ajax: {
      url: BASE_DATA_URL + entityType,
      dataSrc: parseServerResponse,
    },
    columnDefs: [
      { className: "dt-left", "targets": '_all' },
      {orderable: false, targets: unorderableTargets}
    ],
    rowId: 'id',
    columns,
    dom: '<"top"f>rt<"bottom"lip>',
    paging: false,
    scrollY: "70vh",
    scrollX: true,
    scrollCollapse: true,
    bInfo: false
  });
  materializeTable(entityType);
  handleClickRow(entityType);
};

function reloadTable(entityType) {
  $(getTableId(entityType)).DataTable().ajax.reload();
}

function handleClickRow(entityType) {
  $(getTableId(entityType) + ' tbody').on('click', 'tr', function() {
    const table = $(getTableId(entityType)).DataTable();
    const entityId = table.row(this).id();
    openModal(entityType, entityId);
  });
}

function materializeTable(entityType){
  $(getTableId(entityType) + ' td').addClass('mdl-data-table__cell--non-numeric');
  $(getTableId(entityType) + ' th').addClass('mdl-data-table__cell--non-numeric');
  $(getTableId(entityType) + ' label').addClass('mdl-textfield');
  $(getTableId(entityType) + '_filter input').addClass('mdl-textfield__input');

  var filterLabel = $(getTableId(entityType) + '_filter label');
  filterLabel.addClass('mdl-js-textfield');

  //Replace "Search:" with search icon
  filterLabel.get(0).childNodes[0].nodeValue = '';
  var searchIcon = document.createElement("i");
  searchIcon.classList.add("material-icons");
  searchIcon.innerHTML = "search";
  filterLabel.get(0).prepend(searchIcon);
}

const parseServerResponseWithDocumentParser = (parseDocumentFunction) => (raw) => {
  var result = [];
  raw.documents.forEach(doc => result.push(parseDocumentFunction(doc)));
  return result;
}

/** Document Parser Helpers **/
function parseStringField(field) {
  return field ? field.stringValue : '';
}
function parseArrayField(field) {
  return field
    ? field.arrayValue.values
      ? field.arrayValue.values.map(v => parseStringField(v))
      : []
    : [];
}
function parseTimestampField(field) {
  return field
    ? new Date(field.timestampValue)
    : null; // TODO do we want a null here?
}

function parseAddressField(field) {
  // TODO
  var result = {};
  if (field && field.mapValue.fields) {
    Object.keys(field.mapValue.fields).forEach(k => {
      result[k] = parseStringField(field.mapValue.fields[k]);
    });
  }
  return result;
}

/** Document Parsers **/
function animalDocumentParser(doc) {
  // TODO parse other fields
  return ({
    id: doc.name.replace('projects/all-paws-on-deck/databases/(default)/documents/animal/', ''),
    picture: parseStringField(doc.fields.picture),
    name: parseStringField(doc.fields.name),
    adoptionStatus: parseStringField(doc.fields.adoptionStatus),
    gender: parseStringField(doc.fields.gender),
    fixed: parseStringField(doc.fields.fixed),
    species: parseStringField(doc.fields.species),
    breeds: parseArrayField(doc.fields.breeds),
  });
}

function personDocumentParser(doc) {
  return ({
    id: doc.name.replace('projects/all-paws-on-deck/databases/(default)/documents/person/', ''),
    picture: parseStringField(doc.fields.picture),
    firstName: parseStringField(doc.fields.firstName),
    lastName: parseStringField(doc.fields.lastName),
    phoneNumber: parseStringField(doc.fields.phoneNumber),
    email: parseStringField(doc.fields.email),
    roles: parseArrayField(doc.fields.roles),
  });
}

function eventDocumentParser(doc) {
  return ({
    id: doc.name.replace('projects/all-paws-on-deck/databases/(default)/documents/event/', ''),
    name: parseStringField(doc.fields.name),
    type: parseStringField(doc.fields.type),
    starts: parseTimestampField(doc.fields.starts),
    ends: parseTimestampField(doc.fields.ends),
    location: parseAddressField(doc.fields.location),
  });
};

/** Columns **/
const animalColumns = [
  { data: 'picture',        title: 'Picture',       render: renderPicture     },
  { data: 'name',           title: 'Name',                                    },
  { data: 'adoptionStatus', title: 'Adoption Status',                         },
  { data: 'gender',         title: 'Gender',                                  },
  { data: 'fixed',          title: 'Fixed',                                   },
  { data: 'species',        title: 'Species',                                 },
  { data: 'breeds',         title: 'Breeds',                                  },
];

const personColumns = [
  { data: 'picture',        title: 'Picture',       render: renderPicture     },
  { data: 'firstName',      title: 'First Name',                              },
  { data: 'lastName',       title: 'Last Name',                               },
  { data: 'phoneNumber',    title: 'Phone Number',  render: renderPhoneNumber },
  { data: 'email',          title: 'Email',                                   },
  { data: 'roles',          title: 'Roles',                                   },
]

const eventColumns = [
  { data: 'name',           title: 'Name',                                    },
  { data: 'type',           title: 'Type',                                    },
  { data: 'starts',         title: 'Starts',    render: renderDateTime        },
  { data: 'ends',           title: 'Ends',      render: renderDateTime        },
  { data: 'location',       title: 'Location',  render: renderAddress         },
];

// TODO
function renderDate(value) {
  if (value) {
    const options = {
      year: 'numeric', month: 'long', day: 'numeric'
    };
    return value.toLocaleDateString('en-US', options);
  }
  return '';
};
function renderDateTime(value) {
  if (value) {
    const options = {
      year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
    };
    return value.toLocaleDateString('en-US', options);
  }
  return '';
};
function renderAddress(value) {
  const street = removeNulls([value.name, value.street1, value.street2]).join('<br>');
  const city = removeNulls([value.city, value.state]).join(', ');
  return [street, city].join('<br>');
};

function renderPhoneNumber(value) {
  if (value.length === 10) {
    return '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 10);
  }
  else if (value.length === 11) {
    return value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 11);
  }
  return '';
}

function renderPicture(value) {
  if (value) {
    return '<img class="tableImage" src="' + value + '"></img>'
  }
  return '';
}

function removeNulls(l) {
  var result = [];
  for (var i = 0; i < l.length; i++) {
    if (l[i]) result.push(l[i]);
  }
  return result;
}
