// 先按照官方提供的案例撰寫
const Koa = require('koa');
const next = require('next');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
//  FIXME  其實這邊不能這樣寫
const axios = require('axios');
// 加密轉譯的套件工具
const jsSHA = require('jssha');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const routing = require('./server/route');


app.prepare().then(() => {
  const server = new Koa();
  // const router = new Router();
  server.use(bodyParser());

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  routing(server, app, handle);

  // server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
