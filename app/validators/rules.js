"use strict";

// Custom default rules to validate form fields
const rules = {
  numbers: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  required: /\S+/,
  regexPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  minlength(length, value) {
    if (length === void 0) {
      throw "ERROR: It is not a valid length, checkout your minlength settings.";
    } else if (value.length >= length) {
      return true;
    }
    return false;
  },
  maxlength(length, value) {
    if (length === void 0) {
      throw "ERROR: It is not a valid length, checkout your maxlength settings.";
    } else if (value.length >= length) {
      return false;
    }
    return true;
  },
  confirmPassword(password, value) {
    return password === value;
  }
};

export default rules;
