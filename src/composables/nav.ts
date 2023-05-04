import { computed } from 'vue'
import { usePage, useRoute } from 'iles'

export const useNav = () => {
  const { site } = usePage()
  const navlinks = computed(() => {
    return site.nav || []
  })

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    currentPath,
  }
}

export const isCurrentRoute = (navLink, currentPath) => {
  return navLink.link === '/'
    ? currentPath === navLink.link
    : currentPath.startsWith(navLink.link)
}
