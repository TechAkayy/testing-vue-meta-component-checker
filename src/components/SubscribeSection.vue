<script setup lang="ts"></script>
<template>
  <BaseSheet class="py-8 text-center" container role="primary">
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 w-full lg:w-8/12">
          <div class="px-6 py-12 rounded-lg tertiary-card">
            <h2 class="font-bold leading-tight mb-2 text-3xl">
              Subscribe To Our Newsletter
            </h2>
            <p class="mb-8">
              Sign up for our newsletter to receive updates and exclusive offers
            </p>
            <form class="mx-auto sm:w-9/12 xl:w-8/12">
              <div
                class="flex items-center overflow-hidden p-2 rounded-full"
                container
              >
                <input
                  class="border-0 flex-1 outline-none px-5 py-2 rounded-full w-full"
                  placeholder="Enter email..."
                  type="email"
                  required
                />
                <BaseButton type="submit" class="ml-2" role="primary-container">
                  Sign Up
                </BaseButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BaseSheet>
</template>
<style scoped></style>
