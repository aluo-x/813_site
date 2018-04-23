function openModal() {
    document.getElementsByClassName('modal')[0].classList.add('is-active')
}

function closeModal() {
    document.getElementsByClassName('modal')[0].classList.remove('is-active');
}

function openAnimalModal(
  name,
  adoptionStatus,
  gender,
  fixed,
  species,
  breeds,
) {
  clearAnimalModal();

  document.getElementById('nameInput').value = (name || '');
  document.getElementById('adoptionStatusInput').value = (adoptionStatus === '' || adoptionStatus === undefined) ? 'available' : adoptionStatus;
  document.getElementById('genderInput').value = (gender === '' || gender === undefined) ? 'male' : gender;
  document.getElementById('fixedInput').value = (fixed === '' || fixed === undefined) ? true : fixed;
  document.getElementById('speciesInput').value = (species === '' || species === undefined) ? 'dog' : species;
  $('#breedInput').val((breeds === '' || breeds === undefined) ? [] : breeds.split(',')).trigger('change');

  document.getElementById('animalModalTitle').innerHTML = (name !== null && name !== undefined && name !== '')
    ? 'Edit Animal'
    : 'Add Animal';

  openModal();
}

function clearAnimalModal() {
  document.getElementById('nameInput').value = '';
  document.getElementById('adoptionStatusInput').value = 'available';
  document.getElementById('genderInput').value = 'male';
  document.getElementById('fixedInput').value = true;
  document.getElementById('speciesInput').value = 'dog';

  $('#breedInput').val([]).trigger('change');
}

function saveAnimal() {
    const animalName = document.getElementById('nameInput').value;
    const adoptionStat = document.getElementById('adoptionStatusInput').value;
    const animalGender = document.getElementById('genderInput').value;
    const fixedStat = document.getElementById('fixedInput').value;
    const animalSpecies = document.getElementById('speciesInput').value;

    var breeds = [];
    const breedsOptions = document.getElementById('breedInput');
    for (var i = 0; i < breedsOptions.options.length; i++) {
      const b = breedsOptions[i];
      if (b.selected) {
        breeds.push(b.text)
      };
    }

    editAnimal({
        name: animalName,
        adoptionStatus: adoptionStat,
        gender: animalGender,
        fixed: fixedStat,
        species: animalSpecies,
        breeds,
    });
    refreshAnimalTable();
    closeModal();

}

function saveEvent() {
    // get properties from modal input
    closeModal();
}

function savePerson() {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const areaCode = document.getElementById('areaCodeInput').value;
    const exchangeNumber = document.getElementById('exchangeNumberInput').value;
    const endNumber = document.getElementById('endNumberInput').value;
    const email = document.getElementById('emailInput').value;

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
