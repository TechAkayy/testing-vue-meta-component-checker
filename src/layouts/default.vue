<script setup lang="ts"></script>
<template>
  <div>
    <MetaTags />
    <BaseSheet class="flex flex-col">
      <NavBar />
      <div class="mt-24 shadow">
        <slot />
      </div>
      <TheFooter client:visible class="container mx-auto" />
    </BaseSheet>
  </div>
</template>
<style></style>
