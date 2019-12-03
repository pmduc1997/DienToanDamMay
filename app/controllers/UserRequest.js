import BaseRequest from "../libs/BaseRequest";

export default class UserRequest extends BaseRequest {
  login(params) {
    return this.post("/login", params);
  }
}
