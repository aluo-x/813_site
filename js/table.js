$(function() {
  generateAnimalTable();
})

function generateAnimalTable() {
  generateTable('animal', animalColumns, parseServerResponseWithDocumentParser(animalDocumentParser));
}

// function generatePersonTable() {
//   generateTable('person', personColumns, parseServerResponseWithDocumentParser(personDocumentParser));
// }
//
// function generateEventTable() {
//   generateTable('event', eventColumns, parseServerResponseWithDocumentParser(eventDocumentParser));
// }

const BASE_DATA_URL = 'https://firestore.googleapis.com/v1beta1/projects/all-paws-on-deck/databases/(default)/documents/';

const getTableId = (entityType) => '#' + entityType + 'Table';

function generateTable(entityType, columns, parseServerResponse) {
  $(getTableId(entityType)).DataTable({
    ajax: {
      url: BASE_DATA_URL + entityType,
      dataSrc: parseServerResponse,
    },
    rowId: 'id',
    columns,
    dom: '<"top"f>rt<"bottom"lip>',
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
  $(getTableId(entityType) + '_filter label').addClass('mdl-js-textfield');
  $(getTableId(entityType) + '_filter input').addClass('mdl-textfield__input');
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
  return field ? field.arrayValue.values.map(v => parseStringField(v)) : [];
}
// TODO helpers for other field types

/** Document Parsers **/
// TODO add more parsers
function animalDocumentParser(doc) {
  // TODO parse other fields
  return ({
    id: doc.name.replace('projects/all-paws-on-deck/databases/(default)/documents/animal/', ''),
    name: parseStringField(doc.fields.name),
    adoptionStatus: parseStringField(doc.fields.adoptionStatus),
    gender: parseStringField(doc.fields.gender),
    fixed: parseStringField(doc.fields.fixed),
    species: parseStringField(doc.fields.species),
    breeds: parseArrayField(doc.fields.breeds),
  });
}

/** Columns **/
const animalColumns = [
  { data: 'name',           title: 'Name',                            },
  { data: 'adoptionStatus', title: 'Adoption Status',                 },
  { data: 'gender',         title: 'Gender',                          },
  { data: 'fixed',          title: 'Fixed',                           },
  { data: 'species',        title: 'Species',                         },
  { data: 'breeds',         title: 'Breeds',                          },
];
