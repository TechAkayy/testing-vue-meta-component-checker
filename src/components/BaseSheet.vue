<script setup lang="ts">
  const props = defineProps({
    role: {
      type: String,
      default: 'surface',
      validator: (value: any) =>
        [
          'surface',
          'surface-dim',
          'surface-bright',
          'surface-container-lowest',
          'surface-container-low',
          'surface-container',
          'surface-container-high',
          'surface-container-highest',
          'surface-variant',
          'primary',
          'primary-container',
          'secondary',
          'secondary-container',
          'tertiary',
          'tertiary-container',
          'error',
          'error-container',
          'success',
          'success-container',
          'warning',
          'warning-container',
          'info',
          'info-container',
        ].includes(value),
    },
    // Invert bg & text color
    inverse: {
      type: Boolean,
      default: false,
    },
  })

  const themeStyle = computed(() => {
    const bgClass = `pg-${props.inverse ? 'on-inverse-' : ''}${props.role}`
    const textClass =
      props.role.includes('surface') && props.role !== 'surface-variant'
        ? `pg-${props.inverse ? 'inverse-' : 'on-'}surface-text`
        : `pg-${props.inverse ? 'inverse-' : 'on-'}${props.role}-text`

    return `${bgClass} ${textClass}`
  })
</script>
<template>
    <div id="base-sheet" :class="themeStyle">
        <slot/>
    </div>
</template>
<style scoped></style>
