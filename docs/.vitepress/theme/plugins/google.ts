import type { HeadConfig } from 'vitepress'

export const googleAnalytics: HeadConfig[] = [
  ['script',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-X9L11DSZBP',
      async: '',
    },
  ],
  ['script',
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'G-X9L11DSZBP');
    `,
  ],
]
