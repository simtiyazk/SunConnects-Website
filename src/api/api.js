import axios from 'axios';

class API {
  /**
   * Get BASE URLs
   *
   * Configuration
   */


  /**
   * Make a GET request.
   *
   * @param {string} endPoint
   */
  static getRequest(endPoint) {
    return axios.get(endPoint);
  }

  /**
   * Make a POST request.
   *
   * @param {string} endPoint
   * @param {object} data
   */
  static postRequest(endPoint, data) {
    const config = {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    }

    return axios.post(endPoint, data, config);
  }

  /**
   * Make a PUT request.
   *
   * @param {string} endPoint
   */
  static putRequest(endPoint) {
    return axios.put(endPoint);
  }
}

export default API;
