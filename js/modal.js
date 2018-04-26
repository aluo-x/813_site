function openModal(entityType, entityId) {
  // TODO slight lag in opening modal from row - maybe open the modal with a loader overlay?
  if (entityId) {
    getEntities(
      entityType,
      entityId,
      doOpenModal(entityType),
      reportError
    );
  } else {
    doOpenModal(entityType)();
  }
}

function closeModal() {
  document.getElementsByClassName('modal')[0].classList.remove('is-active');
}

function saveModal(entityType) {
  // TODO
  console.log('Saving ' + entityType + ' modal');
  closeModal();
}



const doOpenModal = (entityType) => (data) => {
  populateModal(mapDataToInputIds(entityType, data));
  document.getElementsByClassName('modal')[0].classList.add('is-active');
}

function mapDataToInputIds(entityType, data) {
  // TODO
  // TODO if data is null, use defaults
}

function populateModal(inputIdsList, valuesList) {
  for (var i = 0; i < inputIdsList; i++) {
    $(inputIdsList[i]).value(valuesList[i]);
  }
}

function reportError(error) {
  console.error(error);
};
