<script setup lang="ts">
  import { getPosts } from '~/composables/posts'
  const posts = getPosts()
</script>
<template>
  <section class="md:-mt-8 lg:-mt-32 2xl:-mt-64">
    <div class="container flex justify-center mx-auto px-4 relative">
      <BaseSheet role="surface" container class="rounded-lg">
        <div class="flex flex-wrap justify-center">
          <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="post of posts" :key="post.href">
              <BlogPreview :post="post" class="p-12" />
            </li>
          </ul>
        </div>
      </BaseSheet>
    </div>
  </section>
</template>
<style scoped></style>
