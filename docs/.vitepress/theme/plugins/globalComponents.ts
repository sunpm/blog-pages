import type { App } from 'vue'
import { Archives, LinkList, TagsList } from '../components'

const components = [
  LinkList,
  Archives,
  TagsList,
]

export const globalComponents = {
  install(app: App) {
    components.forEach((component) => {
      const name = component.name ?? component.__name
      if (name) {
        app.component(name, component)
      }
    })
  },
}
