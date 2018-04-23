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
  adoptionStatus: adoption_status.NONE,
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
  breeds: [],
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
  breeds: [],
  gender: gender.FEMALE,
  fixed: false,
  birthdate: new Date('January 1, 2018'),
  weightInPounds: 0.25,
};

const gary = {
  id: 3,
  name: 'Gary',
  adoptionStatus: adoption_status.NONE,
  species: species.DOG,
  breeds: [breeds.DOG.AUSTRALIAN_CATTLE_DOG],
  gender: gender.MALE,
  fixed: false,
  birthdate: new Date('April 1, 2017'),
  weightInPounds: 30.125,
  distinctiveMarkings: ['white tip on tail', 'tan chest'],
};

const wilma = {
  id: 4,
  name: 'Wilma',
  adoptionStatus: adoption_status.PENDING,
  species: species.DOG,
  breeds: [breeds.DOG.AUSTRALIAN_CATTLE_DOG],
  gender: gender.FEMALE,
  fixed: true,
  birthdate: new Date('April 2, 2017'),
  weightInPounds: 32.5,
  distinctiveMarkings: [],
};

const bea = {
  id: 5,
  name: 'Bea',
  adoptionStatus: adoption_status.NONE,
  species: species.DOG,
  breeds: [breeds.DOG.BORDER_COLLIE],
  gender: gender.FEMALE,
  fixed: true,
  birthdate: new Date('June 17, 2016'),
  weightInPounds: 33,
  distinctiveMarkings: ['white collar', 'white tip on tail', 'curly hair'],
};

const barney = {
  id: 6,
  name: 'Barney',
  adoptionStatus: adoption_status.ADOPTED,
  species: species.CAT,
  breeds: [],
  gender: gender.MALE,
  fixed: true,
  birthdate: new Date('April 20, 2012'),
  weightInPounds: 12.25,
  distinctiveMarkings: ['black speckles on nose'],
};

const chimi = {
  id: 7,
  name: 'Chimichanga',
  adoptionStatus: adoption_status.ADOPTED,
  species: species.CAT,
  breeds: [],
  gender: gender.MALE,
  fixed: true,
  birthdate: new Date('July 17, 2011'),
  weightInPounds: 12.15,
  distinctiveMarkings: ['black speckling on nose'],
};

const tweetie = {
  id: 8,
  name: 'Tweetie',
  adoptionStatus: adoption_status.NONE,
  species: species.BIRD,
  breeds: [],
  gender: gender.MALE,
  fixed: false,
  birthdate: new Date('August 16, 2017'),
  weightInPounds: 0.220462,
  distinctiveMarkings: [],
};

const faith = {
  id: 9,
  name: 'Faith',
  adoptionStatus: adoption_status.PENDING,
  species: species.CAT,
  breeds: [],
  gender: gender.FEMALE,
  fixed: true,
  birthdate: new Date('March 11, 2013'),
  weightInPounds: 8.7,
  distinctiveMarkings: [],
};

const onyx = {
  id: 10,
  name: 'Onyx',
  adoptionStatus: adoption_status.NONE,
  species: species.DOG,
  breeds: [breeds.DOG.GERMAN_SHEPHERD],
  gender: gender.FEMALE,
  fixed: true,
  birthdate: new Date('April 1, 2017'),
  weightInPounds: 44.55,
  distinctiveMarkings: [],
};

const mae = {
  id: 11,
  name: 'Mae',
  adoptionStatus: adoption_status.NONE,
  species: species.DOG,
  breeds: [breeds.DOG.BORDER_COLLIE],
  gender: gender.FEMALE,
  fixed: true,
  birthdate: new Date('April 1, 2017'),
  weightInPounds: 56.29,
  distinctiveMarkings: ['gray mottling on legs'],
};

var animals = [barney, bea, chimi, faith, fido, felix, fae, gary, mae, onyx, tweetie, wilma];

const getNextAnimalId = () => {
  var ids = [];
  animals.forEach(a => ids.push(a.id));
  return Math.max(...ids) + 1;
};

const addAnimal = (animalProperties) => {
  console.log('adding animal');
  const id = getNextAnimalId();
  const breeds = (animalProperties.breeds || []);
  animals.push(Object.assign({}, animalProperties, { id, breeds }));
};

const editAnimal = (animalProperties) => {
  var existingAnimal, existingAnimalPosition;
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].name === animalProperties.name) {
      existingAnimal = animals[i];
      existingAnimalPosition = i;
    }
  }
  if (existingAnimal) {
    animals[existingAnimalPosition] = Object.assign({}, existingAnimal, animalProperties)
  } else {
    console.log('no existing animal');
    addAnimal(animalProperties);
  }
}
