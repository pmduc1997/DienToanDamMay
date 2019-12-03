import BaseRequest from "../libs/BaseRequest";

export default class UserRequest extends BaseRequest {

    getListStudents(queryParams) {
        return this.get("/student/list", queryParams);
    }

    searchStudents(queryParams) {
        return this.get('/student/search', queryParams);
    }
}
