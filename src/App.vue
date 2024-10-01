<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'

const mainReference = useTemplateRef<HTMLElement>('main')

const { y } = useScroll(mainReference)

const isScrolled = computed(() => y.value > 0)
const shadowSize = computed(() => Math.min(y.value / 2, 30))
</script>

<template>
  <div class="app-container">
    <AppHeader :isScrolled="isScrolled" :shadowSize="shadowSize" />
    <main ref="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  width: 100dvw;
  height: 100dvh;

  > main {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
