<template>
  <nav class="flex items-center justify-between p-4 shadow">
    <h1 class="text-lg font-bold text-blue-600">
      <RouterLink to="/" class="text-blue-500 hover:underline">yyoooonn</RouterLink>
    </h1>
    <ul class="flex space-x-4">
      <li><RouterLink to="/about" class="text-blue-500 hover:underline">About</RouterLink></li>
      <li><RouterLink to="/test" class="text-blue-500 hover:underline">Test</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>