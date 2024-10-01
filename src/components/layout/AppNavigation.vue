<script setup lang="ts">
import { RouterLink } from 'vue-router'

const isOpen = defineModel<boolean>('isOpen', {
  required: true,
})
</script>

<template>
  <nav id="sidebar" :class="{ open: isOpen }" class="sidebar">
    <div class="menu-group">
      <RouterLink activeClass="active glitch" data-glitch-content="Acasă" to="/" @click="isOpen = false">
        Acasă
      </RouterLink>
      <ul>
        <li><a href="#hero" @click="isOpen = false">Introducere</a></li>
        <li><a href="#about-me" @click="isOpen = false">Despre Mine</a></li>
        <li><a href="#dj-hobby" @click="isOpen = false">DJ Hobby</a></li>
      </ul>
    </div>
    <div class="menu-group">
      <a href="/projects" @click="isOpen = false">Proiecte</a>
      <ul>
        <li><a href="#open-source" @click="isOpen = false">Contribuții Open Source</a></li>
        <li><a href="#technologies" @click="isOpen = false">Tehnologii</a></li>
      </ul>
    </div>
    <div class="menu-group">
      <a href="/contact-and-demo" @click="isOpen = false">Contact și Demo</a>
      <ul>
        <li><a href="#interactive-demo" @click="isOpen = false">Demo Interactiv</a></li>
        <li><a href="#contact" @click="isOpen = false">Contact</a></li>
      </ul>
    </div>
  </nav>
  <Transition name="fade">
    <div v-if="isOpen" class="backdrop" @click="isOpen = false" />
  </Transition>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-sidebar-menu-backdrop);
  backdrop-filter: blur(5px);
  background-color: hsla(0, 0%, 0%, 0.2);
  width: 100dvw;
  height: 100dvh;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.sidebar {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  flex-direction: column;
  gap: 2rem;
  transform: translateX(100%);
  z-index: var(--z-index-sidebar-menu);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  background-color: var(--color-header-background);
  padding: 2rem;
  width: 300px;
  height: 100dvh;

  &.open {
    transform: none;
    box-shadow: 0 0 40px var(--color-electric-blue-transparent);
  }

  > .menu-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > a {
      border-radius: 0.5rem;
      padding: 0.25rem 0.5rem;
      color: var(--color-electric-blue);
      font-size: 1.125rem;
      line-height: 1.75rem;
      text-align: left;
      text-decoration: none;

      --glitch-offset-x: 0.5rem;
      --glitch-offset-y: 0.25rem;

      &.active {
        outline: 2px solid var(--color-neon-green);
        box-shadow: 0 0 20px var(--color-neon-green);
        background: hsla(0, 0%, 100%, 0.1);
        color: white;
      }
    }

    > ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
      list-style: none;
      text-align: left;

      > li {
        padding-left: 2rem;

        > a {
          transition: color 0.15s ease;
          color: var(--color-soft-gray);
          text-decoration: none;

          &:hover {
            color: var(--color-neon-green);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    position: static;
    flex-direction: row;
    align-items: center;
    transform: none;
    padding: 0;
    width: auto;
    height: 100%;

    > .menu-group {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: 100%;

      > a {
        cursor: pointer;
        color: var(--color-white);
        font-size: 1rem;
        line-height: 1.5rem;
      }

      > ul {
        display: none;
        position: absolute;
        top: calc(var(--height-header) - 0.5rem);
        border-radius: 0.5rem;
        background: var(--color-header-background);
        padding: 1rem;

        > li {
          > a {
            font-size: 0.875rem;
            text-wrap: nowrap;
          }
        }
      }

      &:hover {
        > ul {
          display: flex;
        }
      }
    }
  }
}
</style>
