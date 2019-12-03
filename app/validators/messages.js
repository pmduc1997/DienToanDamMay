"use strict";

const messages = {
  en: {
    numbers: "{label} must be a valid number.",
    email: "{label} must be a valid email address.",
    required: "{label} is required.",
    minlength: "{label} length must be greater than {value}.",
    maxlength: "{label} length must be lower than {value}.",
    confirmPassword: "The password confirm no exact",
    regexPassword: "The password includes character and number"
  },
  vn: {
    numbers: "{label} chỉ bao gồm chữ số!",
    email: "{label} không phải định dạng email!",
    required: "{label} không được để trống!",
    minlength: "{label} không được ngắn hơn {value} kí tự!",
    maxlength: "{label}không được dài hơn {value} ký tự!",
    confirmPassword: "Nhập lại mật khẩu không đúng!",
    regexPassword: "Mật khẩu chỉ chứa ký tự chữ và số."
  }
};

const labels = {
  en: {
    phone: "Phone number",
    email: "Email",
    password: "Password",
    rePassword: "Password Confirm",
    firstName: "First name",
    lastName: "Last name",
    birthDay: "Birthday",
  },
  vn: {
    phone: "Số điện thoại",
    phone1: "Số điện thoại 1",
    phone2: "Số điện thoại 2",
    email: "Email",
    password: "Mật khẩu",
    rePassword: "Nhập lại mật khẩu",
    firstName: "Họ",
    lastName: "Tên",
    birthDay: "Ngày sinh",
    address: "Dịa chỉ"
  }
};

export { messages, labels };
