const withTM = require("next-transpile-modules")(["@portion/style"]);

module.exports = withTM({
  reactStrictMode: true,
});
