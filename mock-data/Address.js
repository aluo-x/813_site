/**
 * A postal address
 */
class Address {
  /**
   * @param {String} name    optional display name of the location (e.g. 'Back Bay Vet')
   * @param {String} street  street address (e.g. '123 Main Street')
   * @param {String} street2 additional street address (e.g. 'Apt. 1')
   * @param {String} city    city (e.g. 'Boston')
   * @param {String} state   state (e.g. 'Massaschusetts')
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
   *    Cambridge, Massaschusetts
   */
  getString() {
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
