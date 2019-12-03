import BaseRequest from "../libs/BaseRequest";

export default class NotifyRequest extends BaseRequest {

    getListNotifications(queryParams) {
        return this.get("/notification/get", queryParams);
    }
}
