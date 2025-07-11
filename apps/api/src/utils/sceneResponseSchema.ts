import { Type } from '@google/genai'

const sceneObjectSchemaItem = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    name: { type: Type.STRING },
    type: {
      type: Type.STRING,
      enum: ['MESH', 'LIGHT', 'CAMERA', 'GROUP'], // SceneObjectType enum
    },
    // Mesh related fields
    geometry: {
      type: Type.OBJECT,
      properties: {
        type: {
          type: Type.STRING,
          enum: ['BOX', 'SPHERE', 'CYLINDER', 'CONE', 'CUSTOM'], // GeometryType enum
        },
        params: { type: Type.ARRAY, items: { type: Type.NUMBER } }, // GraphQL의 JSON scalar
        vertices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
        indices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
        normals: { type: Type.ARRAY, items: { type: Type.NUMBER } },
        uvs: { type: Type.ARRAY, items: { type: Type.NUMBER } },
        colors: { type: Type.ARRAY, items: { type: Type.NUMBER } },
      },
      propertyOrdering: ['type', 'params', 'vertices', 'indices', 'normals', 'uvs', 'colors'],
    },
    material: {
      type: Type.OBJECT,
      properties: {
        type: {
          type: Type.STRING,
          enum: ['STANDARD', 'PHYSICAL', 'BASIC'], // MaterialType enum
        },
        color: { type: Type.STRING },
        roughness: { type: Type.NUMBER },
        metalness: { type: Type.NUMBER },
        transparent: { type: Type.BOOLEAN },
        opacity: { type: Type.NUMBER },
      },
      propertyOrdering: ['type', 'color', 'roughness', 'metalness', 'transparent', 'opacity'],
    },
    // Light related fields
    light: {
      type: Type.OBJECT,
      properties: {
        type: {
          type: Type.STRING,
          enum: ['DIRECTIONAL', 'POINT', 'SPOT', 'AMBIENT'], // LightType enum
        },
        color: { type: Type.STRING },
        intensity: { type: Type.NUMBER },
        position: {
          // Vector3
          type: Type.OBJECT,
          properties: {
            x: { type: Type.NUMBER },
            y: { type: Type.NUMBER },
            z: { type: Type.NUMBER },
          },
          propertyOrdering: ['x', 'y', 'z'],
        },
        distance: { type: Type.NUMBER },
        angle: { type: Type.NUMBER },
        target: {
          // Vector3
          type: Type.OBJECT,
          properties: {
            x: { type: Type.NUMBER },
            y: { type: Type.NUMBER },
            z: { type: Type.NUMBER },
          },
          propertyOrdering: ['x', 'y', 'z'],
        },
      },
      propertyOrdering: ['type', 'color', 'intensity', 'position', 'distance', 'angle', 'target'],
    },
    // Camera related fields
    camera: {
      type: Type.OBJECT,
      properties: {
        type: {
          type: Type.STRING,
          enum: ['PERSPECTIVE', 'ORTHOGRAPHIC'], // CameraType enum
        },
        fov: { type: Type.NUMBER },
        near: { type: Type.NUMBER },
        far: { type: Type.NUMBER },
        zoom: { type: Type.NUMBER },
      },
      propertyOrdering: ['type', 'fov', 'near', 'far', 'zoom'],
    },
    // Common fields (transform)
    position: {
      type: Type.OBJECT,
      properties: {
        x: { type: Type.NUMBER },
        y: { type: Type.NUMBER },
        z: { type: Type.NUMBER },
      },
      propertyOrdering: ['x', 'y', 'z'],
    },
    rotation: {
      type: Type.OBJECT,
      properties: {
        x: { type: Type.NUMBER },
        y: { type: Type.NUMBER },
        z: { type: Type.NUMBER },
      },
      propertyOrdering: ['x', 'y', 'z'],
    },
    scale: {
      type: Type.OBJECT,
      properties: {
        x: { type: Type.NUMBER },
        y: { type: Type.NUMBER },
        z: { type: Type.NUMBER },
      },
      propertyOrdering: ['x', 'y', 'z'],
    },
    animations: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          property: { type: Type.STRING },
          from: { type: Type.NUMBER },
          to: { type: Type.NUMBER },
          duration: { type: Type.NUMBER },
          delay: { type: Type.NUMBER },
          repeat: { type: Type.NUMBER },
        },
        propertyOrdering: ['property', 'from', 'to', 'duration', 'delay', 'repeat'],
      },
    },
    count: { type: Type.NUMBER },
    // Recursive children field (핵심!)
    children: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          name: { type: Type.STRING },
          type: {
            type: Type.STRING,
            enum: ['MESH', 'LIGHT', 'CAMERA', 'GROUP'], // SceneObjectType enum
          },
          // Mesh related fields
          geometry: {
            type: Type.OBJECT,
            properties: {
              type: {
                type: Type.STRING,
                enum: ['BOX', 'SPHERE', 'CYLINDER', 'CONE', 'CUSTOM'], // GeometryType enum
              },
              params: { type: Type.ARRAY, items: { type: Type.NUMBER } }, // GraphQL의 JSON scalar
              vertices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
              indices: { type: Type.ARRAY, items: { type: Type.NUMBER } },
              normals: { type: Type.ARRAY, items: { type: Type.NUMBER } },
              uvs: { type: Type.ARRAY, items: { type: Type.NUMBER } },
              colors: { type: Type.ARRAY, items: { type: Type.NUMBER } },
            },
            propertyOrdering: ['type', 'params', 'vertices', 'indices', 'normals', 'uvs', 'colors'],
          },
          material: {
            type: Type.OBJECT,
            properties: {
              type: {
                type: Type.STRING,
                enum: ['STANDARD', 'PHYSICAL', 'BASIC'], // MaterialType enum
              },
              color: { type: Type.STRING },
              roughness: { type: Type.NUMBER },
              metalness: { type: Type.NUMBER },
              transparent: { type: Type.BOOLEAN },
              opacity: { type: Type.NUMBER },
            },
            propertyOrdering: ['type', 'color', 'roughness', 'metalness', 'transparent', 'opacity'],
          },
          // Light related fields
          light: {
            type: Type.OBJECT,
            properties: {
              type: {
                type: Type.STRING,
                enum: ['DIRECTIONAL', 'POINT', 'SPOT', 'AMBIENT'], // LightType enum
              },
              color: { type: Type.STRING },
              intensity: { type: Type.NUMBER },
              position: {
                // Vector3
                type: Type.OBJECT,
                properties: {
                  x: { type: Type.NUMBER },
                  y: { type: Type.NUMBER },
                  z: { type: Type.NUMBER },
                },
                propertyOrdering: ['x', 'y', 'z'],
              },
              distance: { type: Type.NUMBER },
              angle: { type: Type.NUMBER },
              target: {
                // Vector3
                type: Type.OBJECT,
                properties: {
                  x: { type: Type.NUMBER },
                  y: { type: Type.NUMBER },
                  z: { type: Type.NUMBER },
                },
                propertyOrdering: ['x', 'y', 'z'],
              },
            },
            propertyOrdering: [
              'type',
              'color',
              'intensity',
              'position',
              'distance',
              'angle',
              'target',
            ],
          },
          // Camera related fields
          camera: {
            type: Type.OBJECT,
            properties: {
              type: {
                type: Type.STRING,
                enum: ['PERSPECTIVE', 'ORTHOGRAPHIC'], // CameraType enum
              },
              fov: { type: Type.NUMBER },
              near: { type: Type.NUMBER },
              far: { type: Type.NUMBER },
              zoom: { type: Type.NUMBER },
            },
            propertyOrdering: ['type', 'fov', 'near', 'far', 'zoom'],
          },
          // Common fields (transform)
          position: {
            type: Type.OBJECT,
            properties: {
              x: { type: Type.NUMBER },
              y: { type: Type.NUMBER },
              z: { type: Type.NUMBER },
            },
            propertyOrdering: ['x', 'y', 'z'],
          },
          rotation: {
            type: Type.OBJECT,
            properties: {
              x: { type: Type.NUMBER },
              y: { type: Type.NUMBER },
              z: { type: Type.NUMBER },
            },
            propertyOrdering: ['x', 'y', 'z'],
          },
          scale: {
            type: Type.OBJECT,
            properties: {
              x: { type: Type.NUMBER },
              y: { type: Type.NUMBER },
              z: { type: Type.NUMBER },
            },
            propertyOrdering: ['x', 'y', 'z'],
          },
          animations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                property: { type: Type.STRING },
                from: { type: Type.NUMBER },
                to: { type: Type.NUMBER },
                duration: { type: Type.NUMBER },
                delay: { type: Type.NUMBER },
                repeat: { type: Type.NUMBER },
              },
              propertyOrdering: ['property', 'from', 'to', 'duration', 'delay', 'repeat'],
            },
          },
          count: { type: Type.NUMBER },
        },
        propertyOrdering: [
          'id',
          'name',
          'type',
          'geometry',
          'material',
          'light',
          'camera',
          'position',
          'rotation',
          'scale',
          'animations',
          'count',
        ],
      },
    },
  },
  propertyOrdering: [
    'id',
    'name',
    'type',
    'geometry',
    'material',
    'light',
    'camera',
    'position',
    'rotation',
    'scale',
    'animations',
    'count',
    'children',
  ],
}

export const sceneResponseSchema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    background: { type: Type.STRING }, // GraphQL에서 !가 없으므로 optional
    objects: {
      type: Type.ARRAY,
      items: sceneObjectSchemaItem,
    },
  },
  propertyOrdering: ['id', 'background', 'objects'],
}
