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

/** EVENTS **/
const fidoHWTest = {
  id: 0,
  type: event_types.VET_APPOINTMENT,
  animals: [0],
  start: new Date('March 23, 2018 10:00:00'),
  end: new Date('March 23, 2018 11:00:00'),
  location: new Address('Back Bay Vet', '288 Newbury St', null, 'Boston', 'MA'),
  name: 'Fido HW Test',
};

const topOfThePup = {
  id: 1,
  type: event_types.FUNDRAISER,
  animals: [],
  start: new Date('April 1, 2018 18:30:00'),
  end: new Date('April 1, 2018 20:30:00'),
  location: new Address('Top of the Hub', '800 Boylston St', null, 'Boston', 'MA'),
  name: 'Top of the Pup Fundraiser',
};

var events_by_id = {
  0: fidoHWTest,
  1: topOfThePup,
};

const getNextEventId = () => Math.max(...Object.keys(events_by_id)) + 1;

const addEvent = (eventProperties) => {
  const id = getNextEventId();
  events_by_id[id] = Object.assign({}, eventProperties, { id });
}
