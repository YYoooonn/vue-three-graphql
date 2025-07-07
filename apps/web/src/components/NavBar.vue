<template>
  <nav class="flex items-center justify-between p-4 bg-white shadow">
    <h1 class="text-lg font-bold text-blue-600">Vue Layout App</h1>
    <ul class="flex space-x-4">
      <li><RouterLink to="/" class="text-blue-500 hover:underline">Home</RouterLink></li>
      <li><RouterLink to="/about" class="text-blue-500 hover:underline">About</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>