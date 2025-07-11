<template>
  <div ref="container" class="absolute inset-0 w-full h-full" />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useResizeHandler } from '@/composables/useResizeHandler'
import { useSceneStore } from '@/stores/useSceneStore'
import {
  initScene,
  addSceneObject,
  clearScene,
  updateAnimations,
  dispose,
  setSceneBackground,
} from '@/utils/three/sceneManager'
import { uniforms } from '@/constants/materials'

const container = ref<HTMLDivElement | null>(null)
const sceneStore = useSceneStore()

let animationId: number

function setupSceneWatcher() {
  watch(
    () => [...sceneStore.objects],
    (objects) => {
      clearScene(!sceneStore.isLoading)
      setSceneBackground(sceneStore.background)
      for (const objData of objects) {
        addSceneObject(objData)
      }
    },
  )
}

onMounted(() => {
  if (!container.value) return

  const { scene, renderer, camera, controls } = initScene(container.value)

  const removeResizeHandler = useResizeHandler(container.value, camera, renderer)

  setupSceneWatcher()

  const animate = () => {
    updateAnimations()
    controls.update()
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
    uniforms.u_time.value += 0.005 // Update time uniform for animations
    if (sceneStore.isLoading) {
      uniforms.u_time.value += 0.02
      if (uniforms.noise_scale.value < 50.0) uniforms.noise_scale.value += 0.01 // Increase noise scale when loading
    } else {
      uniforms.noise_scale.value = 2.0 // Reset noise scale when not loading
    }
  }
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    removeResizeHandler()
    dispose()
  })
})
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
