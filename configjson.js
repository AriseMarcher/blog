const fs = require('fs/promises')
const path = require('path')

const addToFile = async (key, value) => {
  let fileContents = await fs.readFile('docs/.vuepress/public/json/myConfig.json', { encoding: 'utf8' })
  fileContents = JSON.parse(fileContents)

  fileContents[key] = value
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });
}

const innerPath = 'docs/web'
const getData = async(baseDir = 'gulp') => {
  let result = []
  let files = await fs.readdir(innerPath)
  for (let dir of files) {
    const subFiles = await fs.readdir(`${innerPath}/${dir}`)
    let newPaths = subFiles.map(item => `${dir}/${item}`)
    result.push({
      key: dir,
      value: newPaths
    })
  }
  return result
}

cleanJson = async() => {
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify({}, null, 2), { encoding: 'utf8' });
}

writeNewJson = async (content) => {
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify(content, null, 2), { encoding: 'utf8' });
}

const start = async () => {
  await cleanJson()

  let result = await getData()

  writeNewJson(result)
}

start()