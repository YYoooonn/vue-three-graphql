<template>
  <div class="fixed top-32 left-1/2 transform -translate-x-1/2 w-[500px]">
    <div class="glass-input p-4 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
      <input
        v-model="prompt"
        @keypress.enter="handleSubmit"
        type="text"
        placeholder="Describe your 3D object..."
        class="bg-transparent w-full text-gray-500 placeholder-gray-300 outline-none text-sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGenerateScene } from '@/graphql/hooks/useGenerateScene'
import { useSceneStore } from '@/stores/useSceneStore'

const prompt = ref('')
const { mutate, onDone, onError } = useGenerateScene()
const sceneStore = useSceneStore()

onDone(({ data }) => {
  if (data?.generateScene) {
    sceneStore.setScene(data.generateScene)
    // for (const obj of data.generateScene.objects) {
    //   sceneStore.addObjects(obj)
    // }
  }
})

onError((err) => {
  console.error('GraphQL Error:', err)
})

function handleSubmit() {
  if (!prompt.value) return

  sceneStore.clearObjects()
  mutate({ input: { prompt: prompt.value } })
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
