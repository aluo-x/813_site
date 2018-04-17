/**
 * Mock event data
 *
 * Events have the following properties
 *  @param  {Integer}       id          [REQUIRED] internally-used identifier of the event
 *  @param  {Enum}          type        [REQUIRED] type of the event
 *  @param  {List<Integer>} animals     animals associated with the event (i.e. cat with vet appointment or dogs going to adoption event)
 *  @param  {Date}          start       when the event starts
 *  @param  {Date}          end         when the event ends
 *  @param  {Address}       location    where the event will take place
 *  @param  {String}        name        name of the event
 */

/* TEMPLATE (copy+paste and edit the defaults)
const template = {
  id: 0,
  type: types.VET_APPOINTMENT,
  animals: [],
  start: new Date(),
  end: new Date(),
  location: new Address(),
  name: '',
};
*/

/** CLASSES **/
class Address {
  /**
   * Construct an address
   * @param {String} name    optional display name of the location
   * @param {String} street  [description]
   * @param {String} street2 [description]
   * @param {String} city    [description]
   * @param {String} state   [description]
   */
  constructor(name, street, street2, city, state) {
    this.name = name;
    this.street = street;
    this.street2 = street2;
    this.city = city;
    this.state = state;
  }

  /**
   * Format:
   *   if: name='Back Bay Vet', street='123 Main St.', street2='Apt 1', city='Cambridge', state='Massaschusetts'
   *
   *    Back Bay Vet\n
   *    123 Main Street\n
   *    Apt 1\n
   *    Cambridge, MA
   */
  asString() {
    var line1 = (this.name !== undefined && this.name !== null)
      ? this.name + '\n'
      : null;
    var line2 = this.street + '\n';
    var line3 = (this.street2 !== undefined && this.street2 !== null)
      ? this.street2 + '\n'
      : null;
    var line4 = this.city + ', ' + this.state;
    return (line1 || '') + line2 + (line3 || '') + line4;
  }
}

/** ENUMS **/
const types = {
  'VET_APPOINTMENT':  'Appointment with a veterinarian',
  'ADOPTION_EVENT':   'Event where adoptable animals are present and people come to look at them',
  'FUNDRAISER':       'Event aimed at generating funds for the rescue',
};

/** EVENTS **/
const fidoHWTest = {
  id: 0,
  type: types.VET_APPOINTMENT,
  animals: [0],
  start: new Date('March 23, 2018 10:00:00'),
  end: new Date('March 23, 2018 11:00:00'),
  location: new Address('Back Bay Vet', '288 Newbury St', null, 'Boston', 'MA'),
  name: 'Fido HW Test',
};

const topOfThePup = {
  id: 1,
  type: types.FUNDRAISER,
  animals: [],
  start: new Date('April 1, 2018 18:30:00'),
  end: new Date('April 1, 2018 20:30:00'),
  location: new Address('Top of the Hub', '800 Boylston St', null, 'Boston', 'MA'),
  name: 'Top of the Pup Fundraiser',
};

const events = [fidoHWTest, topOfThePup];

/** HTML **/
// TODO write javascript that parses data and generates the appropriate HTML
