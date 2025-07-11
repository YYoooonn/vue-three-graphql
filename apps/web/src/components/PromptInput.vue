<template>
  <div class="fixed top-32 left-1/2 transform -translate-x-1/2 w-3/4 max-w-2xl">
    <div class="glass-input p-4 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
      <input
        v-model="prompt"
        @keypress.enter="handleSubmit"
        :disabled="isLoading"
        type="text"
        placeholder="봄의 따뜻한 기운을 애니메이션과 함께 추상적으로 표현해줘"
        class="bg-transparent w-full disabled:text-gray-500 text-gray-700 placeholder-gray-400 outline-none text-md overflow-y-auto"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGenerateScene } from '@/graphql/hooks/useGenerateScene'
import { useSceneStore } from '@/stores/useSceneStore'
import { addDefaultObjects } from '@/utils/three/sceneManager'

const prompt = ref('')
const isLoading = ref(false)
const { mutate, onDone, onError } = useGenerateScene()
const sceneStore = useSceneStore()

onDone(({ data }) => {
  sceneStore.isLoading = false
  isLoading.value = false
  if (data?.generateScene) {
    sceneStore.clearScene()
    sceneStore.setScene(data.generateScene)
  }
})

onError((err) => {
  sceneStore.isLoading = false
  isLoading.value = false
  console.error('GraphQL Error:', err)
})

function handleSubmit() {
  if (!prompt.value || sceneStore.isLoading) return
  isLoading.value = true
  sceneStore.isLoading = true
  sceneStore.clearScene()
  addDefaultObjects()
  mutate({ input: { prompt: prompt.value } })
}
</script>

<style scoped>
.glass-input {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
