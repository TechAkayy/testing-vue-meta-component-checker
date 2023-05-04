<script setup lang="ts">
  const props = defineProps({
    role: {
      type: String,
      default: 'primary',
      validator: (value: any) =>
        [
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
          'surface',
          'surface-dim',
          'surface-bright',
          'surface-container-lowest',
          'surface-container-low',
          'surface-container',
          'surface-container-high',
          'surface-container-highest',
          'surface-variant',
        ].includes(value),
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value: any) =>
        ['text', 'flat', 'default', 'tonal', 'outlined', 'plain'].includes(
          value,
        ),
    },
    // Invert bg & text color
    inverse: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator: (value: any) =>
        ['x-small', 'small', 'default', 'large', 'x-large'].includes(value),
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (value: any) => ['horizontal', 'vertical'].includes(value),
    },
    alignment: {
      type: String,
      default: 'left',
      validator: (value: any) => ['left', 'right'].includes(value),
    },
    // Removes box shadow
    flat: {
      type: Boolean,
      default: false,
    },
    // Uses anchor tag insetad of a button
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    // Target route of the link
    to: {
      type: String,
      default: '',
    },
    // Active state to highlight
    active: {
      type: Boolean,
      default: false,
    },
    // Removes ability to click or target
    disabled: {
      type: Boolean,
      default: false,
    },
  })

  const tag = computed(() => {
    return props.href ? 'a' : 'button'
  })

  const variantClass = computed(() => {
    switch (props.variant) {
      case 'default':
        return 'focus:ring-primary-500 dark:focus:ring-primary-100 focus:ring-2 focus:ring-inset '
      case 'text':
        return ' shadow-none !bg-transparent'
    }
  })

  const sizeClass = computed(() => {
    let sizeClass = ''
    switch (props.size) {
      case 'x-small':
        sizeClass = 'px-2 py-1 text-xs'
        break
      case 'small':
        sizeClass = 'px-4 py-1 text-sm'
        break
      case 'default':
        sizeClass = 'px-6 py-2 text-base'
        break
      case 'large':
        sizeClass = 'px-8 py-2 text-lg'
        break
      case 'x-large':
        sizeClass = 'px-10 py-2 text-xl'
        break
    }
    return sizeClass
  })

  const activeClass = computed(() => {
    let activeClass = ''
    const activeBorder = [
      `rounded-none bg-${props.role.split('-')[0]}-200 dark:bg-${
        props.role.split('-')[0]
      }-700`,
    ]

    switch (tag.value) {
      case 'button':
        activeClass = props.active ? 'opacity-100' : ''
        break
      case 'a':
        switch (props.active) {
          case true:
            switch (props.direction) {
              case 'horizontal':
                activeClass = `${activeBorder} border-b`
                break
              case 'vertical':
                activeClass =
                  props.alignment === 'left'
                    ? `${activeBorder} border-l`
                    : `${activeBorder} border-r`
            }
            break
          case false:
            activeClass = ''
        }
    }
    return activeClass
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
  <component
    :is="tag"
    :disabled="disabled"
    class="focus:opacity-100 focus:outline-none hover:opacity-95 inline-block items-center justify-center opacity-[0.85] rounded-full whitespace-nowrap"
    :class="[themeStyle, sizeClass, variantClass, activeClass]"
    :href="href"
    :target="target"
    :to="to"
  >
    <slot name="prepend"> </slot>
    <slot><span>Click here</span> </slot>
    <slot name="append"> </slot>
  </component>
</template>
<style scoped></style>
