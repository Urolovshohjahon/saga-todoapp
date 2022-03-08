import configs from '../config';
const staticsBaseURL = 'http://example.com';
export default {
  staticsBaseURL,
  apisauce: {
    baseURL: configs.API_ROOT,
    headers: {
      'Accept': 'multipart/form-data',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    }
  }
}