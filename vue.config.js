const { version, description, versionCodename } = require("./package.json");

process.env.VUE_APP_VERSION = version;
process.env.VUE_APP_DESCRIPTION = description;
process.env.VUE_APP_CODENAME = versionCodename;

module.exports = {
  devServer: {
    public: 'classroom-manager-vue-ionic.herokuapp.com:8100'
  }
};
