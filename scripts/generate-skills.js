let fs = require('fs')
const inPath = 'resources/skills.csv'
const outPath = 'public/skills.json'

let skills = fs.readFileSync(inPath, 'UTF-8')
let lines = skills.split('\n')

const skillsArray = []
const levelPattern = /\/\/(\d+)/
let currentLevel = -1

for (line of lines) {
  let match = line.match(levelPattern)
  if (match) {
    currentLevel = match[1]
  } else {
    let [name, details] = line.split('|').map(s => s.trim())
    skillsArray.push({ name, exposure: currentLevel, details })
  }
}

let output = JSON.stringify(skillsArray, null, 2);

fs.writeFileSync(outPath, output, 'UTF-8')