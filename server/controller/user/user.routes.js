const account = require("./user.api");

module.exports = function(app) {
  app.post("/login", account.login);
  app.post("/signup", account.signup);
  app.post("/update", account.update);
};
