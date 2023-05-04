<script setup lang="ts">
  import { useAppConfig } from 'iles'
  import { toRef } from 'vue'
  import type { SideBarItem } from '~/composables/config'
  import { joinUrl } from '~/composables/utils'
  import { useActive } from '~/composables/sidebar'

  const props = defineProps<{
    item: SideBarItem
    header?: boolean
    table?: boolean
  }>()

  const { base } = useAppConfig()

  const active = useActive(toRef(props, 'item'))
  const link = computed(() => props.item.link && joinUrl(base, props.item.link))
</script>
<template>
  <BaseButton
    v-if="link"
    class="transition"
    :href="link"
    variant="text"
    :active="!props.table && active"
    direction="vertical"
    :class="{ 'font-bold py-2 !border-0': props.header }"
    :tag="props.header ? 'button' : 'a'"
    container
    role="primary-container"
  >
    {{ item.text }}
  </BaseButton>
  <BaseButton
    v-else
    class="transition"
    :href="link"
    variant="text"
    direction="vertical"
    :class="{ 'font-bold py-2 !border-0': header }"
    :tag="header ? 'button' : 'a'"
    alignment="right"
    container
    role="primary-container"
  >
    <h5 class="text-base transition">
      {{ item.text }}
    </h5>
  </BaseButton>
</template>
<style scoped></style>
