// 以下正常
const Router = require('@koa/router');
const axios = require('axios');

// 暫時先寫在這裡
const client = require('../utils/defaultClient');


const koaRoute = (app, handle) => {
  const router = new Router({ prefix: '/ap/api' });
  //  NOTE  這是打 google API 
  // 這是拿得到資料的喔！

  // router.get('/test', async (ctx) => {
  //   console.log(process.env.GOOGLE_MAP_API_KEY);
  //   // language=zh-TW
  //   var config = {
  //     method: 'get',
  //     url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?&input=台北&inputtype=textquery&fields=place_id&key=${process.env.GOOGLE_MAP_API_KEY}`,
  //     headers: {},
  //   };

  //   const result = await axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error, '嗨我是錯誤');
  //     });
  //   ctx.body = result;
  // });

  // 取得所有觀光景點的資料
  // 會用在全局搜索
  //  NOTE  如果要組網址，從前台傳入的參數必須要帶到後台
  // 組好的字串，到 NodeJS 端要可以解析
  // 這個專案的 API，目前都是 GET，網址的組成也是固定的
  // $select= , $filter= , $orderby= , $top= , $spatialFilter=
  //  TODO  寫法要補在這邊：
  router.get('/getAllTourismScenicSpot', async (ctx) => {
    // 這邊之後可以抽成 handler
    try {
      //  TODO  抽成一個 config, 因為之後可能會有不同的 type
      const type = 'Tourism';
      //  TODO  top & format 不知道是不是必填
      const apiData = await client.get(`${type}/ScenicSpot?$top=30&$format=JSON`);
      console.log(apiData, 'apiData');
      ctx.body = apiData;
    } catch (error) {
      console.log(error, 'error');
    }
  });

  // 取得特定城市景點的資料
  // 如果他輸入的關鍵字有 city，那就要用這個 api
  //  TODO  
  // /getCityTourismScenicSpot/:city  這個網址要確認一下，改成這樣 ctx.query 會拿到什麼？
  router.get('/getCityTourismScenicSpot', async (ctx) => {
    // 這樣可以拿到對應的參數
    console.log(ctx.query, 'query');
    // 這邊會需要組字串，組成網址的字串
    try {
      const apiData = await client.get('');
    } catch (error) {
      console.log(error, 'error');
    }
  });

  // 取得全部的觀光餐飲資料
  router.get('getAllTourismRestaurant', async (ctx) => {
    try {
      
    } catch (error) {
      console.log(error, 'error');
    }
  });

  // 取得城市的觀光餐飲資料
  router.get('getCityTourismRestaurant', async(ctx) => {
    try {
      
    } catch (error) {
      console.log(error, 'error');
    }
  });

  // 取得全部的觀光活動資料
  router.get('getAllTourismActivity', async(ctx) => {
    try {
      
    } catch (error) {
      console.log(error, 'error');
    }
  });


  // 取得城市的觀光活動資料
  router.get('getCityTourismActivity', async(ctx) => {

  });


  // 結巴分詞的 API

  // 最後決定：前端在取得搜尋條件的時候，就已經決定要 call 那一個 api 了

  return router.routes();
};

module.exports = (server, app, handle) => {
  server.use(koaRoute(app, handle));
};
