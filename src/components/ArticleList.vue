<script setup lang="ts">
  import { useArticles } from '~/composables/articles'
  const { articles } = await useArticles()
</script>
<template>
  <section class="md:-mt-8 lg:-mt-32 2xl:-mt-64">
    <div class="container flex justify-center mx-auto px-4 relative">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div
          v-for="(article, index) in articles"
          :key="index"
          class="p-4 w-full md:w-6/12 lg:w-4/12"
        >
          <ArticleListPreview :article="article" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
