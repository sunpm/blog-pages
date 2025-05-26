import type { DefaultTheme } from 'vitepress'
import { NodePath } from '../path'

export const SidebarNode: DefaultTheme.SidebarItem[] = [
  ...NodePath,
]
