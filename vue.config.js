const { version, description, versionCodename } = require("./package.json");

process.env.VUE_APP_VERSION = version;
process.env.VUE_APP_DESCRIPTION = description;
process.env.VUE_APP_CODENAME = versionCodename;

const publicPort = `classroom-manager-vue-ionic.herokuapp.com:${process.env.PORT || 8100}`;
module.exports = {
  devServer: {
    public: publicPort
  }
};
