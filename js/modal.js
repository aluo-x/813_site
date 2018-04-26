function openModal(entityType, entityId) {
  // clear existing modal state
  $('.modal').addClass('is-active');
  $('button.is-success').removeAttr('disabled');
  if (entityId) {
    $('.modal-card').addClass('loading'); // overlay loader until data loaded
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
  $('.button.is-success').addClass('loading'); // disable and show spinner
  $('.button.is-success').attr('disabled');
  const [id, data] = getModalData(entityType);
  (id === '')
    ? createEntity(entityType, saveModalSuccess(entityType), saveModalError)
    : updateEntity(entityType, id, data, saveModalSuccess(entityType), saveModalError);
}

const saveModalSuccess = (entityType) => () => {
  reloadTable(entityType);
  $('.button.is-success').removeClass('loading');
  closeModal();
}

function saveModalError(error) {
  console.error('Error saving modal:', error);
  $('.button.is-success').removeClass('loading');
  closeModal();
}

function errorOpeningModal(error) {
  $('.modal-card').removeClass('loading');
  console.error(error);
}

const populateModalWithData = (entityType) => (data) => {
  $('.modal-card').removeClass('loading');
  $('#idInput').val(data.id);
  console.log($('#idInput').val());
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
  ]
};
