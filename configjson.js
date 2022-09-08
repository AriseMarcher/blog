const fs = require('fs/promises')
const path = require('path')

const addToFile = async (key, value) => {
  let fileContents = await fs.readFile('docs/.vuepress/public/json/myConfig.json', { encoding: 'utf8' })
  fileContents = JSON.parse(fileContents)

  fileContents[key] = value
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });
}

const getData = async(baseDir = 'gulp') => {
  let files = await fs.readdir('docs/web/gulp')
  const result = []
  for (let i = 0; i < files.length; i++) {
    let curPath = `${baseDir}/${files[i]}`
    curPath = curPath.replace(/.md/g, '')
    result.push(curPath)
  }
  await addToFile(baseDir, result)
}
getData()