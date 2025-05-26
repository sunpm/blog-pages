export interface Post {
  frontMatter: {
    'date': string
    'title': string
    'tags': string[]
    'description': string
    'layout': string
    'subtitle': string
    'author': string
    'header-img': string
  }
  regularPath: string
}
