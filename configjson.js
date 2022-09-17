const fs = require('fs/promises')
const path = require('path')

const addToFile = async (key, value) => {
  let fileContents = await fs.readFile('docs/.vuepress/public/json/myConfig.json', { encoding: 'utf8' })
  fileContents = JSON.parse(fileContents)

  fileContents[key] = value
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });
}

// const innerPath = 'docs/web'
const getData = async(key, innerPath) => {
  let result = []
  let files = await fs.readdir(innerPath)
  for (let dir of files) {
    const subFiles = await fs.readdir(`${innerPath}/${dir}`)
    let newPaths = subFiles.map(item => `${dir}/${item}`)
    result.push({
      title: dir,
      collapsable: true,
      children: newPaths
    })
  }
  await addToFile(`/${key}/`, result)
}

cleanJson = async() => {
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify({}, null, 2), { encoding: 'utf8' });
}

writeNewJson = async (content) => {
  await fs.writeFile('docs/.vuepress/public/json/myConfig.json', JSON.stringify(content, null, 2), { encoding: 'utf8' });
}

const AllPaths = ['web', 'cross-platform']

const start = async () => {
  await cleanJson()
  for (let path of AllPaths) {
    await getData(path, `docs/${path}`)
  }
}

start()

module.exports = {
  AllPaths
}