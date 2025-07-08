<template>
  <div class="fixed top-32 left-1/2 transform -translate-x-1/2 w-[500px]">
    <div class="glass-input p-4 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
      <input
        v-model="prompt"
        @keydown.enter="handleSubmit"
        type="text"
        placeholder="Describe your 3D object..."
        class="bg-transparent w-full text-gray-500 placeholder-gray-300 outline-none text-sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGenerateMesh } from '@/graphql/hooks/useGenerateMesh'

const prompt = ref('')
const { mutate, onDone, onError } = useGenerateMesh()

onDone(({ data }) => {
  if (data?.generateMesh) {
    console.log('Generated Mesh:', data.generateMesh)
    // emit('mesh-generated', data.generateMesh)
  }
})

onError((err) => {
  console.error('GraphQL Error:', err)
})

function handleSubmit() {
  if (!prompt.value) return

  mutate({ prompt: prompt.value })
}
</script>

<style scoped>
.glass-input {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
