<script setup lang="ts">
  defineProps({
    article: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <section class="py-8">
    <div class="container justify-center mx-auto px-4 relative">
      <BaseSheet
        container
        class="p-4 rounded-lg md:-mt-12 lg:-mt-32 2xl:-mt-64"
      >
        <div class="flex flex-col h-full rounded-lg">
          <div class="p-8">
            <BaseButton
              class="block mb-2"
              :href="article.url"
              external
              target="_blank"
              tag="a"
              variant="text"
              role="surface"
              container
            >
              <h3
                class="font-semibold leading-tight text-xl whitespace-pre-wrap"
              >
                {{ article.title }}
              </h3>
            </BaseButton>
            <div
              class="border-t flex items-center justify-between mt-auto p-4 text-xs"
            >
              <BaseButton
                href="#"
                class="inline-flex items-center space-x-2"
                variant="text"
                tag="a"
                role="surface"
                container
              >
                <img
                  class="h-12 rounded-full w-12"
                  alt="..."
                  width="400"
                  height="400"
                  :src="article.user.profile_image"
                />
                <div>
                  <h4 class="font-semibold text-base">
                    {{ article.user.name }}
                  </h4>
                  <p>{{ article.published_at }}</p>
                </div> </BaseButton
              ><span>{{ article.reading_time_minutes }} min read</span>
            </div>
            <div class="font-semibold ml-8 mt-4 text-xs">
              <BaseButton
                v-for="(tag, index) in article.tags"
                :key="index"
                tag="a"
                class="hover:underline mb-1 mr-1 text-xs"
                role="secondary"
                >{{ tag }}</BaseButton
              >
            </div>
            <div
              class="dark:prose-invert dark:prose-neutral-100 prose prose-neutral-800 md:max-w-none lg:prose-lg"
            >
              <p class="mt-4" v-html="article.body_html"></p>
            </div>
          </div>
        </div>
      </BaseSheet>
    </div>
  </section>
</template>
<style scoped></style>
