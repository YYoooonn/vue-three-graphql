<template>
  <div class="flex flex-col min-h-screen bg-background text-gray-800">
    <Navbar />
    <main class="relative flex-1 p-6 overflow-y-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>