<script setup lang="ts">
import { RouterView } from 'vue-router'
import WhitepaperHeader from './components/WhitepaperHeader.vue'
import WhitepaperFooter from './components/WhitepaperFooter.vue'
</script>

<template>
  <div id="app">
    <WhitepaperHeader />
    <RouterView />
    <WhitepaperFooter />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Remove padding-top from landing page */
.landing-page {
  padding-top: 0 !important;
}
</style>
