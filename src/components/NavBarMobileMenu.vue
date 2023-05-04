<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  import { isCurrentRoute } from '~/composables/nav'
  const { isMobileMenuOpen } = useMobileMenu()

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
  <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <BaseButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        class="!px-3 !ring-0 text-base rounded-md !block"
        :href="navlink.link"
        tag="a"
        :class="[
          isCurrentRoute(navlink, currentPath)
            ? 'pg-primary-text'
            : 'pg-on-inverse-primary-text',
        ]"
        :variant="isCurrentRoute(navlink, currentPath) ? 'default' : 'text'"
        container
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        >{{ navlink.text }}</BaseButton
      >
    </div>
  </div>
</template>
<style scoped></style>
