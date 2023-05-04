<script setup lang="ts">
  import { isCurrentRoute } from '~/composables/nav'
  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full hidden md:flex md:ml-6">
    <div class="flex h-full space-x-1">
      <BaseButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        class="!px-3 !ring-0 !rounded-md font-medium"
        :href="navlink.link"
        tag="a"
        :active="isCurrentRoute(navlink, currentPath)"
        :variant="isCurrentRoute(navlink, currentPath) ? 'default' : 'text'"
        container
        role="primary-container"
        inverse
        >{{ navlink.text }}</BaseButton
      >
    </div>
  </div>
</template>
<style scoped></style>
