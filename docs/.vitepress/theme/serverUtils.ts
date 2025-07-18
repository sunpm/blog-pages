import type { Post } from './types'
import fs from 'fs-extra'
import { globby } from 'globby'
import matter from 'gray-matter'

export async function getPosts() {
  const paths = await getPostMDFilePaths()
  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      data.date = _convertDate(data.date)
      // 如果没有标题，则使用文件名
      data.title = data.title || item?.split('/')?.pop()?.split('.')[0]
      return {
        frontMatter: data,
        regularPath: getRegularPath(item),
      }
    }),
  )
  posts.sort(_compareDate as any)
  return posts
}

function getRegularPath(url: string) {
  return `/${url.replace('.md', '.html').replace('docs/', '')}`
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

function _compareDate(obj1: Post, obj2: Post) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}

async function getPostMDFilePaths() {
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md'],
  })
  return paths.filter(item => item.includes('posts/'))
}

export async function getPostLength() {
  // getPostMDFilePath return type is object not array
  return [...(await getPostMDFilePaths())].length
}
