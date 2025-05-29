<script setup lang="ts">
interface Props {
  bordered?: boolean
  size?: 'small' | 'medium' | 'large'
  embedded?: boolean
  hoverable?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  bordered: false,
  size: 'medium',
  embedded: false,
  hoverable: true,
  class: '',
})

const cardClasses = computed(() => {
  const classes = ['custom-card']

  if (props.bordered) {
    classes.push('custom-card--bordered')
  }

  if (props.embedded) {
    classes.push('custom-card--embedded')
  }

  if (props.hoverable) {
    classes.push('custom-card--hoverable')
  }

  classes.push(`custom-card--${props.size}`)

  if (props.class) {
    classes.push(props.class)
  }

  return classes.join(' ')
})
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<style scoped>
.custom-card {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.custom-card--bordered {
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.custom-card--embedded {
  background-color: var(--vp-c-bg-soft);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.custom-card--hoverable:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.custom-card--small {
  padding: 12px 16px;
}

.custom-card--medium {
  padding: 16px 20px;
}

.custom-card--large {
  padding: 24px 32px;
}

/* 暗色主题适配 */
.dark .custom-card--bordered {
  border-color: var(--vp-c-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.dark .custom-card--embedded {
  background-color: var(--vp-c-bg-soft);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
}

.dark .custom-card--hoverable:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
</style>
