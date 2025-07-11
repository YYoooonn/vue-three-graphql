import { defineStore } from 'pinia'
import type { SceneFieldsFragment, SceneObjectFieldsFragment } from '@packages/graphql/client'

export const useSceneStore = defineStore('scene', {
  state: () => ({
    id: 'default', // Unique identifier for the scene
    background: '#f2f2f2', // Default background color
    objects: [] as SceneObjectFieldsFragment[],
    isLoading: false,
  }),
  actions: {
    setScene(scene: SceneFieldsFragment) {
      this.id = scene.id
      this.background = scene.background ?? this.background
      this.objects = scene.objects
    },
    addObjects(object: SceneObjectFieldsFragment) {
      this.objects.push(object)
    },
    clearObjects() {
      this.objects = []
    },
    clearScene() {
      this.id = 'default'
      this.background = '#f2f2f2'
      this.objects = []
    },
  },
})
