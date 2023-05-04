<page>
    title: Blog
    alias: ['/posts']
</page>
<script setup lang="ts"></script>
<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Blog</h2>
          <BaseButton variant="text" class="ml-1 text-sm" href="/feed.rss">
            <span>RSS Feed</span>
          </BaseButton>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">Source for this blog</h6>
          <BaseButton
            href="https://github.com/vuejs/blog"
            target="_blank"
            tag="a"
            size="x-small"
            class="ml-2"
            variant="text"
            container
            ><span>Click here</span>
          </BaseButton>
        </div>
        <slot />
      </div>
    </TheHeader>
    <BlogList />
  </div>
</template>
