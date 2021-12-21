const Router = require('@koa/router');

/**
 * 通用 Handler
 */


const koaRoute = (app, handle) => {
  const router = new Router();

  router.get('/ap/prod', async (ctx) => {
    await payPage(app, ctx);
  });

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  return router.routes();
};

module.exports = (server, app, handle) => {
  server.use(koaRoute(app, handle));
};
