/**
 * An email address
 */
class Email {
  /**
   * @param {String} address  the user-selected name (i.e. 'joey' from 'joey@gmail.com')
   * @param {String} provider the provider (i.e. 'gmail.com' from 'joey@gmail.com')
   */
  constructor(value) {
    this.value = value;
  }

  getString() {
    return this.value;
  }

  isGmail() {
    const splitted = this.value.split('@');
    return splitted.length === 2 && splitted[1] === 'gmail.com';
  }

  isYahoo() {
    const splitted = this.value.split('@');
    return splitted.length === 2 && splitted[1] === 'gmail.com';
  }
};
