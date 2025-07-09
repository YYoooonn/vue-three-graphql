<template>
  <div ref="container" class="absolute inset-0 w-full h-full" />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useResizeHandler } from '@/composables/useResizeHandler'
import { useMeshStore } from '@/stores/useMeshStore'
import { initScene, addMesh, clearScene, disponse } from '@/utils/three/sceneManager'
import { addTestObjects } from '@/utils/three/test'

const container = ref<HTMLDivElement | null>(null)
const meshStore = useMeshStore()

let animationId: number

function setupMeshWatcher() {
  watch(
    () => meshStore.meshes,
    (meshes) => {
      clearScene()
      for (const meshData of meshes) {
        addMesh(meshData)
      }
    },
    { deep: true },
  )
}

onMounted(() => {
  if (!container.value) return

  const { scene, renderer, camera, controls } = initScene(container.value)

  const removeResizeHandler = useResizeHandler(container.value, camera, renderer)

  const { cube, sampleLine } = addTestObjects(scene)
  setupMeshWatcher()

  const animate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    sampleLine.rotation.y -= 0.01

    controls.update()
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    removeResizeHandler()
    disponse()
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
