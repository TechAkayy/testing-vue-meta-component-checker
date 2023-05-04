<script setup lang="ts">
  // defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'Header',
  // 	},
  // })
</script>
<template>
  <section>
    <BaseSheet role="primary" container>
      <div class="h-36 pl-10 pt-10">
        <div class="container mx-auto px-4">
          <slot></slot>
        </div>
      </div>
    </BaseSheet>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill="currentColor"
      class="pg-primary pg-surface-text"
    >
      <path
        d="M0,64L80,74.7C160,85,320,107,480,149.3C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>
<style scoped></style>
