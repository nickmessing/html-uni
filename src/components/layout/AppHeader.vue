<script setup lang="ts">
import { ref } from 'vue'

import AppNavigation from './AppNavigation.vue'

const { isScrolled, shadowSize } = defineProps<{
  isScrolled: boolean
  shadowSize: number
}>()

const isMenuOpen = ref(false)

const name = 'Nicolai Moraru'
</script>

<template>
  <header :class="{ scrolled: isScrolled }" class="app-header">
    <h1 :data-glitch-content="name" class="glitch">{{ name }}</h1>
    <div class="spacer" />
    <button class="menu-button" @click="isMenuOpen = !isMenuOpen">☰</button>
    <AppNavigation v-model:isOpen="isMenuOpen" />
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-header-background);
  padding: 0 1rem;
  height: var(--height-header);
  text-align: center;

  &.scrolled {
    box-shadow: 0 0 calc(v-bind(shadowSize) * 1px) var(--color-electric-blue-transparent);
  }

  > h1 {
    flex-shrink: 0;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: var(--font-family-display);
  }

  > .spacer {
    flex-grow: 1;
  }

  > .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding-bottom: 0.25rem;
    color: var(--color-white);
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0 2rem;

    > .menu-button {
      display: none;
    }
  }
}
</style>
