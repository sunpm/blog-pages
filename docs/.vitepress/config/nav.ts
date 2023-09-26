import {DefaultTheme} from "vitepress";
import {basics, packing} from "./docs";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '基础知识', items: basics
  },
  {
    text: '打包工具', items: packing
  },
]
