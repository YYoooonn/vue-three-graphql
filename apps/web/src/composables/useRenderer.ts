import * as THREE from 'three'
import { BACKGROUND_COLOR } from '@/constants/color'

export function useRenderer(container: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BACKGROUND_COLOR)

  const width = container.clientWidth
  const height = container.clientHeight
  renderer.setSize(width, height)

  container.appendChild(renderer.domElement)

  return { renderer, scene }
}