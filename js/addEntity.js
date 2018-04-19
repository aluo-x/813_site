
function openModal() {
  document.getElementsByClassName('modal')[0].classList.add('is-active')
}

function closeModal() {
  document.getElementsByClassName('modal')[0].classList.remove('is-active');
}

function saveAnimal() {
  // get properties from modal input
  closeModal();
}

function savePerson() {
  const firstName = document.getElementById('firstNameInput').value;
  const lastName = document.getElementById('lastNameInput').value;
  const areaCode = document.getElementById('areaCodeInput').value;
  const exchangeNumber = document.getElementById('exchangeNumberInput').value;
  const endNumber = document.getElementById('endNumberInput').value;
  const email = document.getElementById('emailInput').value.split('@');

  const selectedRolesRaw = document.getElementById('rolesInput').selectedOptions;
  const roles = Array.prototype.map.call(selectedRolesRaw, r => r.text);
  addPerson({
    firstName,
    lastName,
    phoneNumber: new Phone(areaCode, exchangeNumber, endNumber),
    email: new Email(email),
    roles,
  });
  refreshPeopleTable();
  closeModal();
}
