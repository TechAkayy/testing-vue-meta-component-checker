<script setup lang="ts">
  import { listArticles } from '~/composables/articles'
  const props = defineProps({
    article: {
      type: Object,
      required: true,
    },
  })

  const articleLink = computed(() => {
    return `/articles/${props.article.id}`
  })
</script>
<template>
  <BaseSheet class="rounded-lg" container>
    <div
      class="flex flex-col h-full overflow-hidden rounded-lg shadow surface-container"
    >
      <BaseButton
        class="-mt-2 -mx-6"
        :href="articleLink"
        variant="text"
        tag="a"
      >
        <img alt="..." :src="article.social_image" />
      </BaseButton>
      <div class="p-4">
        <BaseButton
          class="-mx-6 mb-2 whitespace-pre-wrap"
          :href="articleLink"
          tag="a"
          variant="text"
          role="surface"
        >
          <h5>
            {{ article.title }}
          </h5>
        </BaseButton>
        <p class="dark:prose-invert prose prose-gray">
          {{ article.description }}
        </p>
        <div class="font-semibold mt-4 text-xs">
          <BaseButton
            v-for="(tag, index) in article.tag_list"
            :key="index"
            class="mb-1 mr-1"
            size="x-small"
            role="secondary"
            @click="listArticles(undefined, undefined, tag)"
            >{{ tag }}</BaseButton
          >
        </div>
      </div>
      <BaseSheet role="primary">
        <div
          class="flex items-center justify-between mt-auto p-4 rounded-b-lg shadow-2xl"
        >
          <BaseButton
            href="#"
            class="flex items-center mr-2 space-x-2"
            variant="text"
            container
            @click="listArticles(article.user.username)"
          >
            <img
              class="h-12 rounded-full w-12"
              alt="..."
              width="400"
              height="400"
              :src="article.user.profile_image"
            />
            <div class="flex flex-col items-start">
              <h6 class="whitespace-pre-wrap">{{ article.user.name }}</h6>
              <PostDate :date="article.published_at" />
            </div>
          </BaseButton>
          <div class="text-center">
            <span class="whitespace-nowrap"
              >{{ article.reading_time_minutes }} min</span
            >
            <span> read</span>
          </div>
        </div>
      </BaseSheet>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
