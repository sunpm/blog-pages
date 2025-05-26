import type { DefaultTheme } from 'vitepress'
import { UniAppPath, UniSavePath } from '../path'

export const SidebarMiniProgram: DefaultTheme.SidebarItem[] = [
  {
    text: 'unisave - 拯救 uniapp',
    collapsed: true,
    items: [
      ...UniSavePath,
    ],
  },
  ...UniAppPath,
]
