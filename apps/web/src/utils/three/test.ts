import * as THREE from 'three'

import { SAMPLE_LINE, SAMPLE_CUBE } from '@/constants/three'

export function addTestObjects(scene: THREE.Scene) {
  // 테스트용 큐브
  const cube = SAMPLE_CUBE
  scene.add(cube)

  // 테스트용 선
  const sampleLine = SAMPLE_LINE
  scene.add(sampleLine)

  return {
    cube,
    sampleLine,
  }
}
