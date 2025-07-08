<template>
  <div ref="container" class="absolute inset-0 w-full h-full" />
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRenderer } from '@/composables/useRenderer'
import { useCamera } from '@/composables/useCamera'
import { useControls } from '@/composables/useControls'
import { useLights } from '@/composables/useLights'
import { useResizeHandler } from '@/composables/useResizeHandler'

import * as THREE from 'three'
import { SAMPLE_LINE } from '@/constants/three'

const container = ref<HTMLDivElement | null>(null)

let animationId: number

onMounted(() => {
  if (!container.value) return

  const { renderer, scene } = useRenderer(container.value)
  const camera = useCamera(container.value)
  const controls = useControls(camera, renderer.domElement)
  useLights(scene)
  const removeResizeHandler = useResizeHandler(container.value, camera, renderer)

  // 임시 테스트 큐브
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0x00aaff })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // 임시 테스트 path
  scene.add(SAMPLE_LINE)

  const animate = () => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    SAMPLE_LINE.rotation.y -= 0.01

    controls.update()
    renderer.render(scene, camera)
    animationId = requestAnimationFrame(animate)
  }
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    controls.dispose()
    renderer.dispose()
    removeResizeHandler()
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