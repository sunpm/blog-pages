<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { highlightCSS } from '../../../composables'

const props = withDefaults(defineProps<{
  input?: string
  formattedCss?: string
  previewStyle?: any
  showPreview?: boolean
  showMode?: boolean
  showTabs?: boolean
  showCSS?: boolean
  showCopy?: boolean
  showConfig?: boolean
  enableConfig?: boolean
  enablePreview?: boolean
  nested?: boolean
  fixed?: string
  appended?: string
  html?: string
  tab?: 'code' | 'css' | 'config'
  mode?: 'interpret' | 'compile'
}>(), {
  input: 'px-1.2em py-2 bg-hex-0ea5e9 text-white rounded\nhover:\(shadow bg-opacity-85)',
  formattedCss: '',
  previewStyle: {},
  showPreview: true,
  showMode: false,
  showTabs: false,
  showCSS: true,
  showCopy: true,
  showConfig: false,
  enableConfig: false,
  enablePreview: true,
  nested: false,
  fixed: '',
  appended: '',
  tab: 'code',
  mode: 'interpret',
})

const { copy, copied } = useClipboard({
  read: false,
  source: props.formattedCss,
  copiedDuring: 2000,
})
</script>

<template>
  <div class="inline-playground mt-4">
    <div class="relative rounded" border="~ solid">
      <div class="grid w-full" style="grid-template-columns: 1fr max-content;">
        <div overflow-hidden flex="~ col auto">
          <div p-2>
            {{ input }}
          </div>
          <div v-show="showCSS" class="text-sm" border-t="~ solid">
            <div class="ml-1 flex p-2 text-sm opacity-50">
              <span select-none>CSS</span>
              <div class="flex-auto" />
              <div v-if="showMode" class="icon-button" title="Toggle Mode" @click="toggleMode">
                <span class="mr-1.5 text-sm capitalize">{{ mode }}</span>
                <div v-if="mode === 'compile'" i-carbon-circle-packing />
                <div v-else i-carbon-chart-bubble-packed />
              </div>
              <div
                v-if="showCopy"
                class="icon-button ml-3"
                :class="{ active: copied }"
                title="Copy"
                @click="copy()"
              >
                <div v-if="copied" i-carbon-checkmark-outline class="text-green-500" />
                <div v-else i-carbon-copy cursor-pointer />
              </div>
            </div>
            <n-scrollbar x-scrollable>
              <pre class="max-h-30em !bg-transparent !px-4" v-html="highlightCSS(formattedCss)" />
            </n-scrollbar>
          </div>
        </div>
        <div class="min-h-40 w-10em p-3" border-l="~ solid">
          <div :style="previewStyle">
            {{ html }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
