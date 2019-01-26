let fs = require('fs')
const inPath = 'resources/skills.csv'
const outPath = 'public/skills.json'

let skills = fs.readFileSync(inPath, 'UTF-8')
skills.split('\n')

let [expert, advanced] = skills.split('\n---\n')
  .map(skills => skills.split('\n')
    .filter(line => line.match(/.+\|.+/))
    .map(skill => {
      let [name, details] = skill.split('|').map(s => s.trim())
      return { name, details }
    })
  )

let output = JSON.stringify({ expert, advanced }, null, 2)

fs.writeFileSync(outPath, output, 'UTF-8')