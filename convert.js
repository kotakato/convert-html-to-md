const fs = require('fs');
const TurndownService = require('turndown')
const turndownPluginGfm = require('turndown-plugin-gfm')

const turndownService = new TurndownService({headingStyle: "atx"})
turndownService.use(turndownPluginGfm.gfm)

const htmlPaths = process.argv.slice(2)
for (const htmlPath of htmlPaths){
    const markdownPath = htmlPath.replace(/\.html$/, '.md')
    const html = fs.readFileSync(htmlPath, 'utf-8')
    const markdown = turndownService.turndown(html)
    fs.writeFileSync(markdownPath, markdown)
}
