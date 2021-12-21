//  TODO  這邊有可能要回頭改寫
const backendAPI = require('./backendAPI');

module.exports = {
  async formDataPost(url, data, config) {
    try {
      const form = new FormData();
      for (let key in data) {
        form.append(key, data[key]);
      }

      const res = await backendAPI.post(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...config,
      });

      return res.data;
    } catch (res) {
      return Promise.reject(res.data);
    }
  },
  async get(url, config) {
    try {
      const res = await backendAPI.get(url, {
        config,
      });
      return res.data;
    } catch (res) {
      return Promise.reject(res.data);
    }
  },
  async post(url, data, config) {
    try {
      const res = await backendAPI.post(url, data, { ...config });
      return res.data;
    } catch (res) {
      return Promise.reject(res.data);
    }
  },
};
