/**
 * A phone number
 *
 * Example: 617-555-5555
 */
class Phone {
  /**
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
  getString(formatType) {
    switch (formatType) {
      case 'parensConsolidated':
        return '(' + this.areaCode + ') ' + this.exchangeNumber + '-' + this.number;
      case 'dashes':
        return this.areaCode + ' - ' + this.exchangeNumber + ' - ' + this.number;
      case 'dashesConsolidated':
        return this.areaCode + '-' + this.exchangeNumber + '-' + this.number;
      case 'parens':
      default:
        return '(' + this.areaCode + ') ' + this.exchangeNumber + ' - ' + this.number;
    }
  }
}
