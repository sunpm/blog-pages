import type { DefaultTheme } from 'vitepress'
import { postsDir } from '../url'
import { SidebarCss } from './css'
import { SidebarJavascript } from './javascript'
import { SidebarMiniProgram } from './mini-program'
import { SidebarNode } from './node'

export const sidebar: DefaultTheme.Sidebar = {
  [`${postsDir}/node/`]: SidebarNode,
  [`${postsDir}/css/`]: SidebarCss,
  [`${postsDir}/mini-program/`]: SidebarMiniProgram,
  [`${postsDir}/unisave-docs/`]: SidebarMiniProgram,
  [`${postsDir}/javascript/`]: SidebarJavascript,
  [`${postsDir}/typescript/`]: SidebarJavascript,
}
