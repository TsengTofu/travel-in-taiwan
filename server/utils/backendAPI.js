const axios = require('axios');
const jsSHA = require('jssha');

require('dotenv').config(); // why？？？
//  TODO  下面這段是加密 APP_KEY
const appID = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const GMTString = new Date().toGMTString(); // 日期字串
const encryptObject = new jsSHA('SHA-1', 'TEXT'); // 要研究一下參數
encryptObject.setHMACKey(appKey, 'TEXT');
encryptObject.update('x-date: ' + GMTString);
const HMAC = encryptObject.getHMAC('B64');

// 組字串，但我也不知道為何這邊要這樣寫
const Authorization =
  'hmac username="' +
  appID +
  '", algorithm="hmac-sha1", headers="x-date", signature="' +
  HMAC +
  '"';

const headers = {
  Authorization: Authorization,
  'X-Date': GMTString,
};

// 版本號應該要抽出來變成常數
const backendAPI = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/',
  timeout: 6000,
  headers: headers,
});


// 參考用
// TODO: ADD Token to header
// backendAPI.interceptors.request.use((config) => {
//   return config;
// });

module.exports = backendAPI;
