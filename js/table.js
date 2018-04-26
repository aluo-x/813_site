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
  });

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

const parseServerResponseWithDocumentParser = (parseDocumentFunction) => (raw) => {
  var result = [];
  raw.documents.forEach(doc => result.push(parseDocumentFunction(doc)));
  return result;
}

/** Document Parser Helpers **/
function parseStringField(field) {
  return field ? field.stringValue : '';
}
// TODO helpers for other field types

/** Document Parsers **/
// TODO add more parsers
function animalDocumentParser(doc) {
  const id = doc.name.replace('projects/all-paws-on-deck/databases/(default)/documents/animal/', '');

  const name = parseStringField(doc.fields.name);
  const gender = parseStringField(doc.fields.gender);
  const species = parseStringField(doc.fields.species);

  // TODO parse other fields

  return ({ id, name, gender, species });
}

/** Columns **/
const animalColumns = [
  { data: 'name',         title: 'Name',                  },
  { data: 'gender',       title: 'Gender',                },
  { data: 'species',      title: 'Species',               },
];
