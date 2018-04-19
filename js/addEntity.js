
function openModal() {
  document.getElementsByClassName('modal')[0].classList.add('is-active')
}

function closeModal() {
  document.getElementsByClassName('modal')[0].classList.remove('is-active');
}

function saveAnimal() {
  // get properties from modal input
  // addAnimal()
  console.log('add animal');
  closeModal();
}

function savePerson() {
  // get properties from modal input
  // addPerson();
  console.log('add person');
  closeModal();
}
