<script setup lang="ts">
  import { useNav } from '~/composables/nav'
  const { navlinks, currentPath } = useNav()
</script>
<template>
  <BaseSheet class="fixed w-full z-10">
    <nav class>
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-24 items-center justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex flex-shrink-0 items-center">
              <BaseButton
                href="/"
                class="flex mb-1 mt-2"
                tag="a"
                container
                variant="text"
                role="primary-container"
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5em"
                  xml:space="preserve"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="3px"
                  viewBox="0 0 48 48"
                  height="2.5em"
                  class="font-extrabold mr-2 text-xl"
                >
                  <path
                    d="M33 24a14.46 14.46 0 00-2.69-7.91 14.66 14.66 0 00-1-1.24c-.18-.2-.36-.4-.56-.59s-.39-.38-.59-.56A14.53 14.53 0 005.41 30.9a5.38 5.38 0 01.39.75 8.43 8.43 0 01.71 4.79 8.43 8.43 0 014.79.71 5.38 5.38 0 01.75.39 14.57 14.57 0 0011.66.47"
                  ></path>
                  <path
                    d="M30.93 10.62s0 1.46-2.18 3.64M44 24a15 15 0 01-30 0zm-15 4v11m-3-12l-7 7m20 0l-7-7"
                  ></path>
                  <path d="M-423-219h690v690h-690z"></path>
                </svg>
                <h6 class="font-extrabold leading-none text-xl">
                  Nature's<br />Delight
                </h6>
              </BaseButton>
            </div>
            <NavBarDesktopTabs
              client:media="screen and (min-width: 768px)"
              :navlinks="navlinks"
              :current-path="currentPath"
              class="h-full"
            />
          </div>
          <DarkModeSwitch client:load />
          <div class="-mr-2 flex items-center md:hidden">
            <NavBarMobileMenuButton
              client:media="screen and (max-width: 768px)"
            />
          </div>
        </div>
      </div>
      <NavBarMobileMenu
        client:media="screen and (max-width: 768px)"
        :navlinks="navlinks"
        :current-path="currentPath"
      />
    </nav>
  </BaseSheet>
</template>
<style scoped></style>
