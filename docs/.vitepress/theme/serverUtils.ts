import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'

export async function getPosts() {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      data.date = _convertDate(data.date)
      // 如果没有标题，则使用文件名
      data.title = data.title || item.split('/').pop().split('.')[0]
      return {
        frontMatter: data,
        regularPath: getRegularPath(item),
      }
    }),
  )
  posts.sort(_compareDate)
  return posts
}

function getRegularPath(url) {
  return `/${url.replace('.md', '.html').replace('docs/', '')}`
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter(item => item.includes('src/'))
}

export async function getPostLength() {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length
}
