// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: [
      '**/*.md',
    ],
    markdown: {
      overrides: {
      },
    },
    unocss: true,
    typescript: true,
    vue: true,
  },
).removeRules(
  'no-console',
  'no-labels',
  'no-lone-blocks',
  'no-restricted-syntax',
  'node/prefer-global/buffer',
  'node/prefer-global/process',
  'prefer-rest-params',
  'symbol-description',
  'ts/ban-types',
  'ts/no-empty-object-type',
  'ts/no-invalid-this',
  'ts/no-unnecessary-type-constraint',
  'vue/no-template-shadow',
  'vue/no-v-text-v-html-on-component',
)
