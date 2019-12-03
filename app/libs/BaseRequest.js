import AppConfig from "app/utils/AppConfig";

export default class BaseRequest {
  async get(url, params = {}) {
    console.log("get", AppConfig.ACCESS_TOKEN);
    let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    let fullUrl = this._getFullUrl(url) + '?' + query;
    console.log("fullUrl", fullUrl)
    let response = await fetch(fullUrl, {
      method: 'GET',
      headers: this._getHeader()
    });
    return await this._processResponse(response);
  }

  async post(url, params = {}) {
    let formdata = new FormData();
    Object.keys(params).map((keyName) => {
      formdata.append(keyName, params[keyName]);
    }).join('&');
    let resp = await fetch(this._getFullUrl(url), {
      method: 'POST',
      headers: this._getHeader2(),
      body: formdata
    });
    return await this._processResponse(resp);
  }

  _logResponse(responseCode, data) {
    if (__DEV__) {
      console.log(responseCode, data);
    }
  }

  async _processResponse(response) {
    const content = await response.text();
    let data = {};
    try {
      data = content ? JSON.parse(this._preParseData(content)) : {};
      this._logResponse(response.status, data);
    } catch (error) {
      this._logResponse(response.status, content);
      return { error }
    }
    return data;
  }

  _preParseData(str) {
    return str.substring(1, str.length);
  }

  _getFullUrl(url) {
    return AppConfig.getApiServer() + url
  }

  _getHeader() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AppConfig.ACCESS_TOKEN}`
    }
  }

  _getHeader2() {
    return {
      // 'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${AppConfig.ACCESS_TOKEN}`
    }
  }

}
