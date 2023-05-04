<page>
    title: Articles
</page>
<script setup lang="ts"></script>
<template layout="default">
  <div class="pb-12">
    <TheHeader>
      <div class="container mx-auto px-4">
        <h2 class="text-5xl">Articles</h2>
        <div class="flex items-center mt-2">
          <h6>Source for this blog</h6>
          <BaseButton
            href="https://developers.forem.com/api/v1"
            target="_blank"
            tag="a"
            size="x-small"
            class="ml-2"
            variant="text"
            container
          >
            <span>Click here</span>
          </BaseButton>
        </div>
        <div class="flex items-center mt-2">
          <h6>For free public APIs</h6>
          <BaseButton
            href="https://github.com/public-apis/public-apis#personality"
            target="_blank"
            tag="a"
            size="x-small"
            class="mb-2 ml-2"
            container
            variant="text"
          >
            <span>Click here</span>
          </BaseButton>
        </div>
      </div>
    </TheHeader>
    <ArticleList />
  </div>
</template>
<style scoped></style>
