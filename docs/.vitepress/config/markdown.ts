import type { MarkdownOptions } from 'vitepress'

export const markdown: MarkdownOptions = {
  // 启用自定义链接渲染
  /* config: (md) => {
  // 不完美，将标题渲染器也覆盖了
    // 重写链接渲染器
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      // 获取链接的 href 属性
      const hrefIndex = tokens[idx].attrIndex('href')
      const href = tokens[idx].attrs?.[hrefIndex]?.[1] || ''

      // 获取链接的 title 属性
      const titleIndex = tokens[idx].attrIndex('title')
      const title = titleIndex >= 0 ? tokens[idx].attrs?.[titleIndex]?.[1] : ''

      // 使用我们的自定义组件替换链接
      const attrs = [
        `href="${href}"`,
        title ? `title="${title}"` : '',
      ].filter(Boolean).join(' ')

      return `<CustomLink ${attrs}>`
    }

    // 重写链接关闭标签
    md.renderer.rules.link_close = () => '</CustomLink>'
  }, */
}
