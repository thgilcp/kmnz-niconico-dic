var fs = require('fs')
var html = fs.readFileSync('./dist/index.html', { encoding: 'utf-8' })

html = html.replace(/box-shadow:inset(.*?);/g, 'box-shadow:$1 inset;')
html = html.replace(/(:| )\.(\d+?)(em|px)/g, '$1 0.$2$3')

var CSSInliner = require('./node_modules/css-inliner')
const inliner = new CSSInliner({
  directory: './dist/'
})
inliner.inlineCSSAsync(html).then(function(result) {
  fs.writeFileSync('./inlined/index.html', result, { encoding: 'utf-8' })
})
