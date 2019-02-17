let fs = require('fs')
const inPath = 'resources/skills.csv'
const outPath = 'public/skills.json'

let skills = fs.readFileSync(inPath, 'UTF-8')
let lines = skills.split('\n')

const skillsArray = []

for (line of lines) {
  let [name, level, details] = line.split('|').map(s => s.trim())
  skillsArray.push({ name, exposure: level, details })
}

let output = JSON.stringify(skillsArray, null, 2);

fs.writeFileSync(outPath, output, 'UTF-8')