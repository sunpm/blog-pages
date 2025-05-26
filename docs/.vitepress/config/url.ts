export const githubLink = 'https://github.com/sunpm/blog-pages'
export const userGithubLink = 'https://github.com/sunpm'
export const zhihuLink = 'https://www.zhihu.com/people/pmun'
export const runLink = 'https://blog.sunpm.me'

export const postsDir = '/posts'
export const cssDir = `${postsDir}/css`
export const miniProgramDir = `${postsDir}/mini-program`
export const npmDir = `${postsDir}/node/npm`
export const javascriptDir = `${postsDir}/javascript`
export const typescriptDir = `${postsDir}/typescript`

// javascript 笔记路径
export function getJSUrl(path: string) {
  return `/posts/javascript${path}`
}
export function getCSSUrl(path: string) {
  return `/posts/css${path}`
}
export function getNPMUrl(path: string) {
  return `/posts/npm${path}`
}
// 小程序笔记路径
export function getMiniProgramUrl(path: string) {
  return `/posts/mini-program${path}`
}

export function getViteUrl(path: string) {
  return `/posts/vite${path}`
}
export function getVueCliUrl(path: string) {
  return `/posts/vue-cli${path}`
}
export function getUnisaveDocsUrl(path: string) {
  return `/posts/unisave-docs${path}`
}
