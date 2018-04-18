/**
 * Mock people data
 *
 * People have the following properties
 *  @param  {Integer}       id              [REQUIRED] interally-used identifier of the person
 *  @param  {String}        firstName       [REQUIRED] first name of the person
 *  @param  {String}        lastName        last name of the person
 *  @param  {List<Phone>}   phoneNumbers    list of phone numbers to contact the person
 *  @param  {List<Email>}   emails          list of email addresses to contact the person
 *  @param  {List<Address>} addresses       list of addresses to contact the person
 *  @param  {List<Integer>} fostersCurrent  list of animals person is currently fostering
 *  @param  {List<Integer>} fostersPast     list of animals the person has fostered in the past
 *  @param  {List<Enum>}    roles           list of roles for this person
 *  @param  {Date}          joinDate        date person started volunteering for the rescue
 */

/* TEMPALTE (copy+paste and edit the defaults)
const template = {
  id: 0,
  firstName: '',
  lastName: '',
  phoneNumbers: [],
  emails: [],
  addresses: [],
  fostersCurrent: [],
  fostersPast: [],
  joinDate: new Date(),
  roles: [],
};
 */


/** PEOPLE **/
const raven = {
  id: 0,
  firstName: 'Raven',
  lastName: 'Bird',
  phoneNumbers: [new Phone('617', '555', '1234')],
  emails: [new Email('raven', 'gmail.com')],
  addresses: [new Address(null, '123 Main St.', 'Apt 1', 'Cambridge', 'MA')],
  fostersCurrent: [],
  fostersPast: [2],
  joinDate: new Date('March 17, 2012'),
  roles: [roles.FOSTER],
};

const sam = {
  id: 1,
  firstName: 'Sam',
  lastName: 'Clean',
  phoneNumbers: [new Phone('617', '555', '2222')],
  emails: [new Email('sam', 'gmail.com'), new Email('sam', 'cleaner.net')],
  addresses: [],
  joinDate: new Date('April 1, 2016'),
  roles: [roles.CAGE_CLEANER],
};

const cat = {
  id: 2,
  firstName: 'Catherine',
  lastName: 'Kitty',
  phoneNumbers: [new Phone('617', '555', '5555'), new Phone('617', '555', '4567')],
  emails: [new Email('cat', 'gmail.com')],
  fostersCurrent: [0, 1],
  fostersPast: [],
  joinDate: new Date('January 1, 2001'),
  roles: [roles.ADMIN, roles.FOSTER, roles.CAGE_CLEANER],
};

var people_by_id = {
  0: raven,
  1: sam,
  2: cat,
};

const getNextPersonId = () => Math.max(...Object.keys(people_by_id)) + 1;

const addPerson = (personProperties) => {
  const id = getNextPersonId();
  people_by_id[id] = Object.assign({}, personProperties, { id });
};
