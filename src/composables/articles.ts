import { $fetch } from 'ofetch'
import type { Article, Articles, State } from '~/composables/config'

// const apiBaseUrl = 'http://localhost:3001'
const apiBaseUrl = 'https://dev.to/api'

const articles = ref([])

// https://developers.forem.com/api/v1#tag/articles/operation/getArticles
export function fetchArticles(
  url: string,
  params: Record<string, string | number | undefined> = {},
): Promise<any> {
  return $fetch(url, {
    baseURL: `${apiBaseUrl}/articles`,
    params,
  })
}

export async function listArticles(
  username?: string,
  tags: string | string[] = [],
  tag: string = 'vue',
  state: State = 'fresh',
  page: number = 1,
): Promise<Articles> {
  tags = typeof tags === 'string' ? [tags] : tags
  tags = tags.join(',')
  const params = username
    ? { username, state }
    : { username, tag, tags, state, page }
  articles.value = await fetchArticles('', params)
  return articles.value
}

export function getArticle(id: number): Promise<Article> {
  return fetchArticles(`/${id}`)
}

export const useArticles = async () => {
  await listArticles()

  return {
    articles,
    getArticle,
  }
}
