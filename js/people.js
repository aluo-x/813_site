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

/** CLASSES **/

class Phone {
  /** Construct a phone number
   * @param {String} areaCode       3-digits
   * @param {String} exchangeNumber 3-digits
   * @param {String} number         4-digits
   */
  constructor(areaCode, exchangeNumber, number) {
    this.areaCode = areaCode;
    this.exchangeNumber = exchangeNumber;
    this.number = number;
  }

  /** Return the phone number as a string
   *
   * Format Types:
   *  parens (default):   (XXX) XXX - XXXX
   *  parensConsolidated: (XXX) XXX-XXXX
   *  dashes:             XXX - XXX - XXXX
   *  dashesConsolidated: XXX-XXX-XXXX
   *
   * @param  {String} formatType [description]
   * @return {[type]}            [description]
   */
  asString(formatType) {
    switch (formatType) {
      case 'parensConsolidated':
        return '(' + this.areaCode + ') ' + this.exchangeNumber + '-' + this.number;
      case 'dashes':
        return this.areaCode + ' - ' + this.exchangeNumber + ' - ' + this.number;
      case 'dashesConsolidated':
        return this.areaCode + '-' + this.exchangeNumber + '-' + this.number;
      case 'parens':
      case default:
        return '(' + this.areaCode + ') ' + this.exchangeNumber + ' - ' + this.number;
    }
  }
}

class Email {
  /**
   * Construct an email address
   * @param {String} address  the user-selected name (i.e. 'joey' from 'joey@gmail.com')
   * @param {String} provider the provider (i.e. 'gmail.com' from 'joey@gmail.com')
   */
  constructor(address, provider) {
    this.address = address;
    this.provider = provider;
  }

  asString() {
    return this.address + '@' + this.provider;
  }

  isGmail() {
    return this.provider === 'gmail.com';
  }

  isYahoo() {
    return this.provider === 'yahoo.com';
  }
};

class Address {
  /**
   * Construct an address
   * @param {[type]} street  [description]
   * @param {[type]} street2 [description]
   * @param {[type]} city    [description]
   * @param {[type]} state   [description]
   */
  constructor(street, street2, city, state) {
    this.street = street;
    this.street2 = street2;
    this.city = city;
    this.state = state;
  }

  /**
   * Format:
   *   if: street='123 Main St.', street2='Apt 1', city='Cambridge', state='Massaschusetts'
   *
   *    123 Main Street\n
   *    Apt 1\n
   *    Cambridge, MA
   */
  asString() {
    var line1 = this.street + '\n';
    var line2 = (this.street2 !== undefined && this.street2 !== null)
      ? this.street2 + '\n'
      : null;
    var line3 = this.city + ', ' + this.state;
    return line1 + (line2 || '') + line3;
  }
}

/** ENUMS **/

const roles = {
  CAGE_CLEANER: 'cage cleaner', // 'Cleans the cages at the rescue',
  FOSTER:       'foster',       // 'Takes animals into their home and cares for them',
  ADMIN:        'admin',        // 'Administrator of the resuce',
}

/** PEOPLE **/
const raven = {
  id: 0,
  firstName: 'Raven',
  lastName: 'Bird',
  phoneNumbers: [new Phone('617', '555', '1234')],
  emails: [new Email('raven', 'gmail.com')],
  addresses: [new Address('123 Main St.', 'Apt 1', 'Cambridge', 'MA')],
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

const people = [cat, raven, sam];

/** HTML **/
// TODO write javascript that parses data and generates the appropriate HTML
