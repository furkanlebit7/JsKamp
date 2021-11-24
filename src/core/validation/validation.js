export default class Validation {
  static isName(value) {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return !this.isEmpty(value) && regex.test(value);
  }

  static isEmail(value) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !this.isEmpty(value) && regex.test(value);
  }

  static isCreditCardNumber(creditCardNumber) {
    const regex = /^\d{16}$/;
    return !this.isEmpty(creditCardNumber) && regex.test(creditCardNumber);
  }

  static isEmpty(value) {
    return value === undefined || value === null || value === "";
  }

  static isEmptyArray(value) {
    return value === undefined || value === null || value.length === 0;
  }

  static isEmptyObject(value) {
    return (
      value === undefined || value === null || Object.keys(value).length === 0
    );
  }

  static isNumber(value) {
    return !isNaN(value);
  }
}
