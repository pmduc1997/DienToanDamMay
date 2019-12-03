import BaseRequest from "../libs/BaseRequest";

export default class CustomerRequest extends BaseRequest {

    getCustomers(queryParams) {
        return this.get("/customers", queryParams);
    }
}
