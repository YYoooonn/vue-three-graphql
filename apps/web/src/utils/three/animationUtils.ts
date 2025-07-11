import type * as THREE from 'three'

export interface Animation {
  property: string // 예: "rotation.y"
  from: number
  to: number
  duration: number // ms
  delay?: number // ms
  repeat?: number // -1이면 무한 반복
  easing?: (t: number) => number
  elapsed?: number // 내부 관리용
  progress?: number // 내부 관리용
  startTime?: number // 내부 관리용
  direction?: 1 | -1 // 왕복용
}

function defaultEasing(t: number): number {
  // linear easing
  return t
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateAnimationProperty(object: any, propertyPath: string, value: number) {
  const parts = propertyPath.split('.')
  const last = parts.pop()!
  const target = parts.reduce((acc, key) => acc?.[key], object)
  if (target && last in target) {
    target[last] = value
  }
}

function updateAnimation(anim: Animation, object: THREE.Object3D, delta: number): boolean {
  anim.elapsed = (anim.elapsed ?? 0) + delta
  const delay = anim.delay ?? 0
  if (anim.elapsed < delay) return false

  const t = Math.min((anim.elapsed - delay) / anim.duration, 1)
  const eased = (anim.easing ?? defaultEasing)(t)

  const value = anim.from + (anim.to - anim.from) * eased
  updateAnimationProperty(object, anim.property, value)

  if (t >= 1) {
    // 반복 처리
    if (anim.repeat === -1 || (anim.repeat ?? 0) > 0) {
      anim.elapsed = 0
      if (anim.repeat && anim.repeat > 0) anim.repeat -= 1
      return false
    }
    return true // 종료
  }
  return false
}

export function applyAnimationsRecursive(object: THREE.Object3D, delta: number) {
  const anims = object.userData.animations as Animation[] | undefined
  if (anims) {
    object.userData.animations = anims.filter((anim) => !updateAnimation(anim, object, delta))
  }

  for (const child of object.children) {
    applyAnimationsRecursive(child, delta)
  }
}
