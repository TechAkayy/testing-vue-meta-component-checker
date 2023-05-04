<script setup lang="ts">
  import { useMobileMenu } from '~/composables/mobile-menu'
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>
<template>
  <BaseButton
    aria-controls="mobile-menu"
    aria-expanded="false"
    class="rounded-md"
    size="small"
    container
    @click="openMobileMenu"
    ><span class="sr-only">Open main menu</span>
    <svg
      class="h-6 w-6"
      :class="[isMobileMenuOpen ? 'hidden' : 'block']"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    <svg
      class="h-6 w-6"
      :class="[isMobileMenuOpen ? 'block' : 'hidden']"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </BaseButton>
</template>
<style scoped></style>
