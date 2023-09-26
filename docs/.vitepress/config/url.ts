export const githubLink = 'https://github.com/sunpm/blog-pages'
export const userGithubLink = 'https://github.com/sunpm'
export const zhihuLink = 'https://www.zhihu.com/people/pmun'
export const runLink = 'https://imaginative-valkyrie-e6ddc7.netlify.app'

// code 笔记路径
export function getCodeDocsUrl(path: string) {
  return `/code${path}`
}
// javascript 笔记路径
export function getJSUrl(path: string) {
  return getCodeDocsUrl(`/javascript${path}`)
}
// 小程序笔记路径
export function getMiniProgramUrl(path: string) {
  return getCodeDocsUrl(`/mini-program${path}`)
}
