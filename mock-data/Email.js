/**
 * An email address
 */
class Email {
  /**
   * @param {String} address  the user-selected name (i.e. 'joey' from 'joey@gmail.com')
   * @param {String} provider the provider (i.e. 'gmail.com' from 'joey@gmail.com')
   */
  constructor(address, provider) {
    this.address = address;
    this.provider = provider;
  }

  getString() {
    return this.address + '@' + this.provider;
  }

  isGmail() {
    return this.provider === 'gmail.com';
  }

  isYahoo() {
    return this.provider === 'yahoo.com';
  }
};
