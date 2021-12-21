const apiRouting = require("./api");
const pageRouting = require("./page");

module.exports = (server, app, handle) => {
  apiRouting(server, app, handle);
  pageRouting(server, app, handle);
};
