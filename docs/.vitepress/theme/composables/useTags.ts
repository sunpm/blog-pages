import { useData } from 'vitepress'
import type { Post } from '../types'

export function useTags() {
  const { theme } = useData()
  const posts = theme.value.posts
  function getTagsList() {
    const data = new Map()
    posts.forEach((p: Post) => {
      p.frontMatter.tags?.forEach((tag) => {
        if (data.has(tag)) {
          data.set(tag, data.get(tag) + 1)
        }
        else {
          // 否则，添加新的标签并设置计数为1
          data.set(tag, 1)
        }
      })
    })
    return data
  }

  function filterTagsPosts(tag: string) {
    return posts.filter((p: Post) => p.frontMatter.tags?.includes(tag))
  }
  return {
    getTagsList,
    filterTagsPosts,
  }
}
