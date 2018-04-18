/**
 * Mock animal data
 *
 * Animals have the following properties
 *    @param  {Integer}       id                    [REQUIRED] internally-used identifier of the animal
 *    @param  {String}        name                  [REQUIRED] name of the animal
 *    @param  {Enum}          adoptionStatus        [REQUIRED] indicates if the animal has been adopted
 *    @param  {Enum}          species               [REQUIRED] what type of animal it is
 *    @param  {List<Enum>}    breeds                what breeds of species it is
 *    @param  {Enum}          gender                [REQUIRED] gender of the animal
 *    @param  {Boolean}       fixed                 [REQUIRED] indicates if animal has been surgically altered to be unable to reproduce
 *    @param  {Date}          birthdate             actual or estimated date of birth of the animal
 *    @param  {Float}         weightInPounds        weight of the animal in pounds
 *    @param  {List<String>}  distinctiveMarkings   unique markings that identify the animal
 */

/* TEMPLATE (copy+paste and edit the defaults)

const template = {
  id: 0,
  name: '',
  adoptionStatus: adoptionStatus.NONE,
  species: species.DOG,
  breeds: [],
  gender: gender.MALE,
  fixed: true,
  birthdate: new Date('April 1, 2017'),
  weightInPounds: 32.5,
  distinctiveMarkings: [],
};
 */

/** ANIMALS **/

const fido = {
  id: 0,
  name: 'Fido',
  adoptionStatus: adoption_status.NONE,
  species: species.DOG,
  breeds: [breeds.DOG.BORDER_COLLIE, breeds.DOG.LABRADOR_RETRIEVER],
  gender: gender.MALE,
  fixed: true,
  birthdate: new Date('October 15, 2017'),
  weightInPounds: 32.5,
};

const felix = {
  id: 1,
  name: 'Felix',
  adoptionStatus: adoption_status.PENDING,
  species: species.CAT,
  gender: gender.MALE,
  fixed: true,
  birthdate: new Date('April 1, 2012'),
  weightInPounds: 12.25,
  distinctiveMarkings: ['black speckles on nose'],
};

const fae = {
  id: 2,
  name: 'Fae',
  adoptionStatus: adoption_status.ADOPTED,
  species: species.BIRD,
  gender: gender.FEMALE,
  fixed: false,
  birthdate: new Date('January 1, 2018'),
  weightInPounds: 0.25,
};

var animals_by_id = {
  0: fido,
  1: felix,
  2: fae,
};

const getNextAnimalId = () => Math.max(...Object.keys(animals_by_id)) + 1;

const addAnimal = (animalProperties) => {
  const id = getNextAnimalId();
  animals_by_id[id] = Object.assign({}, animalProperties, { id });
}
