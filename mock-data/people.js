/**
 * Mock people data
 *
 * People have the following properties
 *  @param  {Integer}       id              [REQUIRED] interally-used identifier of the person
 *  @param  {String}        firstName       [REQUIRED] first name of the person
 *  @param  {String}        lastName        last name of the person
 *  @param  {Phone}   phoneNumber    list of phone numbers to contact the person
 *  @param  {Email}   email         list of email addresses to contact the person
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
  phoneNumber: '',
  emails: '',
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
  phoneNumber: new Phone('617', '555', '1234'),
  email: new Email('raven', 'gmail.com'),
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
  phoneNumber: new Phone('617', '555', '2222'),
  email: new Email('sam', 'gmail.com'),
  addresses: [],
  joinDate: new Date('April 1, 2016'),
  roles: [roles.CAGE_CLEANER],
};

const cat = {
  id: 2,
  firstName: 'Catherine',
  lastName: 'Kitty',
  phoneNumber: new Phone('617', '555', '5555'),
  email: new Email('cat', 'gmail.com'),
  fostersCurrent: [0, 1],
  fostersPast: [],
  joinDate: new Date('January 1, 2001'),
  roles: [roles.ADMIN, roles.FOSTER, roles.CAGE_CLEANER],
};

var people = [raven, sam, cat];

const getNextPersonId = () => {
  var ids = [];
  people.forEach(p => ids.push(p.id));
  return Math.max(...ids) + 1;
};

const addPerson = (personProperties) => {
  const id = getNextPersonId();
  people.push(Object.assign({}, personProperties, { id }));
};
