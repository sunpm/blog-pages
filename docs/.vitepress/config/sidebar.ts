import {DefaultTheme} from "vitepress";
import {basics, packing} from "./docs";

export const sidebar: DefaultTheme.Sidebar = [
    ...basics,
    ...packing,
]
