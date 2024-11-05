import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export const defaultConfig = defineConfig({
  details: false,
  presets: [
    presetUno(),
    presetAttributify(),
  ],
})

export default defineConfig({
  shortcuts: {
    'container-width': 'w-[1400px] m-xa',
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-start': 'flex justify-start items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-between': 'flex-y-center flex-justify-between',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-a': 'absolute-lt absolute-rb',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',

    //   background
    'bg-brand': 'bg-$vp-c-brand',
    'bg-brand-light': 'bg-$vp-c-brand-light',
    'bg-brand-dark': 'bg-$vp-c-brand-dark',
    'bg-secondary': 'bg-$c-text-secondary',
    'bg-active': 'bg-$c-bg-active',

    // text colors
    'text-main-1': 'text-$vp-c-brand-1',
    'text-c-1': 'text-$vp-c-text-1',
    'text-c-inverse-1': 'text-$vp-c-text-inverse-1',
    'text-secondary': 'text-$c-text-secondary',

    'text-icon': 'mr-10px mt-2px h-20px w-20px',
    'text-span': 'line-clamp-2 min-h-2.4em break-all',

    // 边框
    'b-color': '$c-border',

    // color
    'main-color': '$c-main',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        script: 'Homemade Apple',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
