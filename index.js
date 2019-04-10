var fs = require("fs");
var CSSInliner = require("./node_modules/css-inliner");

var html = fs.readFileSync("index.html", { encoding: "utf-8" });
const inliner = new CSSInliner({
  directory: "."
});

inliner.inlineCSSAsync(html).then(function(result) {
  fs.writeFileSync("build.html", result, { encoding: "utf-8" });
});
