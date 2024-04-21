import { META } from '../../config/app.config'

function initCopyright() {
  if (import.meta.env.SSR) {
    return
  }
  const copyText = () => {
    return [
      '',
      '',
      `来源：${META.title}`,
      `链接：${location.href}`,
      '著作权归作者所有，商业转载请联系作者获得授权，非商业转载请注明出处。',
    ].join('\n')
  }
  const buildText = (content: string) => content + copyText()
  const buildHtml = (content: string) => content + copyText()
  document.addEventListener('copy', (event) => {
    const content = window.getSelection()?.toString() || ''
    event.clipboardData?.setData('text/plain', buildText(content))
    event.clipboardData?.setData('text/html', buildHtml(content))
    event.preventDefault()
  })
}

export const copyright = {
  install() {
    initCopyright()
  },
}
