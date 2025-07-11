import * as THREE from 'three'
import type { SceneObjectFieldsFragment } from '@packages/graphql/client'

const DEFAULT_MATERIAL = new THREE.MeshStandardMaterial({
  color: '#cccccc',
  metalness: 0.5,
  roughness: 0.5,
  side: THREE.DoubleSide,
})

export function createMaterial(material: SceneObjectFieldsFragment['material']): THREE.Material {
  if (!material) return DEFAULT_MATERIAL // exception
  switch (material.type) {
    case 'STANDARD':
      return new THREE.MeshStandardMaterial({
        color: material.color ?? '#cccccc',
        metalness: material.metalness ?? 0.5,
        roughness: material.roughness ?? 0.5,
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      })
    case 'PHYSICAL':
      return new THREE.MeshPhysicalMaterial({
        color: material.color ?? '#cccccc',
        metalness: material.metalness ?? 0.5,
        roughness: material.roughness ?? 0.5,
        // clearcoat: material.clearcoat ?? 0.0,
        // clearcoatRoughness: material.clearcoatRoughness ?? 0.0,
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      })
    case 'BASIC':
      return new THREE.MeshBasicMaterial({
        color: material.color ?? '#cccccc',
        opacity: material.opacity ?? 1.0,
        transparent: material.transparent ?? false,
        side: THREE.DoubleSide,
      })
    // case 'PHYSICAL':
    //   return new THREE.MeshPhysicalMaterial({
    //     color: material.color ?? '#cccccc',
    //     metalness: material.metalness ?? 0.5,
    //     roughness: material.roughness ?? 0.5,
    //     // clearcoat: material.clearcoat ?? 0.0,
    //     // clearcoatRoughness: material.clearcoatRoughness ?? 0.0,
    //     opacity: material.opacity ?? 1.0,
    //     transparent: material.transparent ?? false,
    //   })
    // case 'PHONG':
    //   return new THREE.MeshPhongMaterial({
    //     color: material.color ?? '#cccccc',
    //     specular: material.specular ?? '#111111',
    //     shininess: material.shininess ?? 30,
    //   })
    // case 'LAMBERT':
    //   return new THREE.MeshLambertMaterial({
    //     color: material.color ?? '#cccccc',
    //   })
    default:
      console.warn(`Unknown material type: ${material.type}, falling back to MeshStandardMaterial`)
      return DEFAULT_MATERIAL
  }
}
