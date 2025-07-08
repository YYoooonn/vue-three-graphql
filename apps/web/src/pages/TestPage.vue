<template>
  <SceneCanvas />
  <PromptInput @submit="handlePromptSubmit" />
</template>

<script setup lang="ts">
import PromptInput from '@/components/PromptInput.vue'
import SceneCanvas from '@/components/three/SceneCanvas.vue'

function handlePromptSubmit(prompt: string) {
  console.log('Prompt submitted:', prompt)
}
</script>
