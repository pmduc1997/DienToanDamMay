import UserRequest from "app/controllers/UserRequest";
import StudentRequest from "app/controllers/StudentRequest";
import NotifyRequest from "app/controllers/NotifyRequest";
import CustomerRequest from "app/controllers/CustomerRequest";

const requestMap = {
  UserRequest,
  StudentRequest,
  NotifyRequest,
  CustomerRequest
};

const instances = {};

export default class RequestFactory {
  static getRequest(classname) {
    let RequestClass = requestMap[classname];
    if (!RequestClass) {
      throw new Error("Invalid request class name: " + classname);
    }

    let requestInstance = instances[classname];
    if (!requestInstance) {
      requestInstance = new RequestClass();
      instances[classname] = requestInstance;
    }

    return requestInstance;
  }
}
