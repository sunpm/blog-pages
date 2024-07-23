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
  ['script',
    {},
    `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-ND263VWW');
    `,
  ],
]
