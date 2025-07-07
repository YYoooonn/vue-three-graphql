<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <main class="flex-1 p-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>