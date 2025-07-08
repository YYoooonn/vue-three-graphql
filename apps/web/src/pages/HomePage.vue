<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl">Home</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment" class="btn">+</button>
  </div>
</template>
