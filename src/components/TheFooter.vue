<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'Footer',
    },
  })
</script>
<template>
  <footer class="pt-12">
    <div class="container min-w-full px-8">
      <div
        class="-mx-4 flex flex-row flex-wrap justify-between lg:lg:flex-nowrap"
      >
        <div
          class="-mt-4 flex items-center pl-4 pr-8 py-4 w-full lg:flex-col lg:items-start lg:w-4/12"
        >
          <BaseButton
            href="/"
            variant="text"
            tag="a"
            class="-ml-6"
            container
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
          <p class="mt-2">
            Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec.
            Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper
            semper.
          </p>
        </div>
        <div class="pl-4 pr-4 py-4 w-full sm:w-6/12 md:w-4/12 xl:w-2/12">
          <h2 class="font-bold mb-8 text-xl">General</h2>
          <ul>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">FAQ</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">About Us</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">Testimonials</a>
            </li>
          </ul>
        </div>
        <div class="p-4 w-full sm:w-6/12 md:w-4/12 xl:w-2/12">
          <h2 class="font-bold mb-8 text-xl">Links</h2>
          <ul>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">Food Plan</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">Fruit Products</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:pg-primary-text">Drink Products</a>
            </li>
          </ul>
        </div>
        <div class="p-4 w-full sm:w-6/12 md:w-4/12 xl:w-2/12">
          <h2 class="font-bold mb-8 text-xl">Get in Touch</h2>
          <div class="mb-4">
            <a href="#" class="hover:pg-primary-text">+1 234 567-890</a><br />
            <a href="#" class="hover:pg-primary-text">hello@fantico.com</a>
          </div>
          <div class="flex flex-wrap space-x-2">
            <a
              href="#"
              class="flex items-center justify-center mb-2 min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] p-2 rounded-full shadow-lg"
              aria-label="facebook"
            >
              <BaseIcon
                name="logos:facebook"
                tag="span"
                width="20px"
                height="20px" /></a
            ><a
              href="#"
              class="flex items-center justify-center mb-2 min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] p-2 rounded-full shadow-lg"
              aria-label="facebook"
            >
              <BaseIcon
                name="logos:twitter"
                tag="span"
                width="20px"
                height="20px" /></a
            ><a
              href="#"
              class="flex items-center justify-center mb-2 min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] p-2 rounded-full shadow-lg"
              aria-label="facebook"
            >
              <BaseIcon
                name="skill-icons:instagram"
                tag="span"
                width="20px"
                height="20px" /></a
            ><a
              href="#"
              class="flex items-center justify-center mb-2 min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] p-2 rounded-full shadow-lg"
              aria-label="facebook"
            >
              <BaseIcon
                name="skill-icons:linkedin"
                tag="span"
                width="20px"
                height="20px" /></a
            ><a
              href="#"
              class="flex items-center justify-center mb-2 min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] p-2 rounded-full shadow-lg"
              aria-label="facebook"
            >
              <BaseIcon
                name="logos:youtube-icon"
                tag="span"
                width="20px"
                height="20px"
            /></a>
          </div>
        </div>
      </div>
      <div class="py-4">
        <hr class="mb-4 opacity-25" />
        <div class="flex flex-wrap -mx-4 items-center">
          <div class="px-4 py-2 w-full md:flex-1">
            <p>&copy; 2002 - 2021. All Rights Reserved - Company Name</p>
          </div>
          <div class="px-4 py-2 w-full sm:w-auto">
            <a href="#" class="hover:pg-primary-text">Privacy Policy</a> |<a
              href="#"
              class="hover:pg-primary-text"
              >Terms of Use</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
