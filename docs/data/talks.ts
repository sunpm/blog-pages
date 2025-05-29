import type { Talk } from '../types'

export const talks: Talk[] = [
  {
    content: '学习英语需要一天投入几个小时，持之以恒，并不是学一遍就能记住。',
    date: '2025-01-15 10:00:30',
  },
]

talks.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
})
