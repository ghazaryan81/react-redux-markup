const path = require("path");

const getPath = (dir) => {
 return path.join(__dirname, dir);
};

module.exports = {
 webpack: {
  extensions: [
   ".ts",
   ".tsx",
   ".js",
   ".jsx",
   ".json",
   ".scss",
   ".sass",
   ".styl",
   ".less",
   ".css",
  ],
  alias: {
   "@components": getPath("src/components/"),
   "@containers": getPath("src/containers/"),
   "@styles": getPath("src/styles/"),
  },
 },
};
