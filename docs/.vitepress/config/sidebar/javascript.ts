import type { DefaultTheme } from 'vitepress'
import { JavascriptPath, TypescriptPath } from '../path'

export const SidebarJavascript: DefaultTheme.SidebarItem[] = [
  {
    text: 'Javascript',
    collapsed: true,
    items: JavascriptPath,
  },
  {
    text: 'Typescript',
    collapsed: true,
    items: TypescriptPath,
  },
]
