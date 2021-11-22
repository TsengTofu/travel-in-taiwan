// 先按照官方提供的案例撰寫
const Koa = require('koa');
const next = require('next');
const Router = require('@koa/router');
//  FIXME  其實這邊不能這樣寫
const axios = require('axios');
// 加密轉譯的套件工具
const jsSHA = require('jssha');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 先嘗試寫一個看看
  // 取得所有觀光景點的資料
  router.get('/xxx', async (ctx) => {
    // axios 要新增一個 instance
    // 看是否能取得 env 的檔案，都可以取到
    // 參考：https://nodejs.org/api/process.html#process_process_env
    //  FIXME  先處理 Header，這樣才不會回傳 401 錯誤
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

    console.log(headers);

    const result = await axios
      .get(
        'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON',
        // 這邊要塞 Headers 要用 {} 包起來
        { headers }
      )
      .then((response) => {
        return response;
        // 可以看一下 response 的 type
      });
    console.log(result, 'xxxxxx');
    // 這邊看不到結果是因為是個 promise
    //  FIXME  但需要找一下為什麼出不來的原因
    ctx.body = result;
  });

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  console.log('有執行到我哦！');
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
