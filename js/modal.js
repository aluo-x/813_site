function openModal(entityType, entityId) {
  // clear existing modal state
  $('#' + entityType + 'Form')[0].reset();
  $('.modal').addClass('is-active');
  $('button.is-success').removeAttr('disabled');
  if (entityId) {
    $('#modalLoader').show();
    getEntities(
      entityType,
      entityId,
      populateModalWithData(entityType),
      errorOpeningModal
    );
  }
}

function closeModal() {
  $('.modal').removeClass('is-active');
}

function saveModal(entityType) {
  $('#modalSave').show();
  $('.button.is-success').attr('disabled');
  const [id, data] = getModalData(entityType);
  (id === '')
    ? createEntity(entityType, data, saveModalSuccess(entityType), saveModalError)
    : updateEntity(entityType, id, data, saveModalSuccess(entityType), saveModalError);
}

const saveModalSuccess = (entityType) => () => {
  reloadTable(entityType);
  $('#modalSave').hide();
  closeModal();
}

function saveModalError(error) {
  console.error('Error saving modal:', error);
  $('#modalSave').hide();
  closeModal();
}

function errorOpeningModal(error) {
  $('#modalLoader').hide();
  console.error(error);
}

const populateModalWithData = (entityType) => (data) => {
  $('#modalLoader').hide();
  $('#idInput').val(data.id);
  var fields = inputs[entityType];
  fields.forEach(f => {
    var value = data[f];
    if (value) {
      $('#' + f + 'Input').val(value);
    }
  });
}

function getModalData(entityType) {
  const id = $('#idInput').val();
  var fields = inputs[entityType];
  var data = {};
  fields.forEach(f => {
    var value = $('#' + f + 'Input').val();
    if (value) {
      data[f] = value;
    }
  });
  return [id, data];
}

const inputs = {
  'animal': [
    'name',
    'adoptionStatus',
    'gender',
    'fixed',
    'species',
    'breeds',
  ],
  'person': [
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'roles',
  ],
  'event': [
    'name',
    'type',
    'location',
    'starts',
    'ends',
  ],
};
