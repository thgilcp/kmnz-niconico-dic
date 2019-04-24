var fs = require("fs");
var CSSInliner = require("./node_modules/css-inliner");

var html = fs.readFileSync("./src/index.html", { encoding: "utf-8" });
const inliner = new CSSInliner({
  directory: "./src/"
});

inliner.inlineCSSAsync(html).then(function(result) {
  fs.writeFileSync("./build/index.html", result, { encoding: "utf-8" });
});
