<page>
    title: [id]
</page>
<script setup lang="ts">
  import { Article } from '~/composables/config'

  const props = defineProps<{ articleId: number }>()
  const article: Article = await getArticle(+props.articleId)
</script>
<script lang="ts">
  import { useArticles, getArticle } from '~/composables/articles'
  export default definePageComponent({
    async getStaticPaths() {
      const { articles } = await useArticles()
      return articles.value.map((article) => ({
        // Specify the parameters for the page.
        params: { id: String(article.id) },

        // Pass any data needed to render the page.
        props: { articleId: article.id },
      }))
    },
  })
</script>
<template layout="default">
  <div>
    <ArticleCardHeader
      :cover="article.cover_image || article.social_image"
    ></ArticleCardHeader>
    <ArticleCard :article="article" />
  </div>
</template>
<style scoped></style>
