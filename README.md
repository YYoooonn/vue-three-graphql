# vue-three-graphql

### vue + apollo + gemini 를 활용한 3차원 view 생성 App

사용자의 추상적인 설명을 바탕으로 독창적이고 시각적으로 흥미로운 3차원 예술 작품을 생성하는 AI 예술가

gemini의 생성형 ai를 사용한 3차원 모형 생성기

https://github.com/user-attachments/assets/7e5e2677-65bd-437a-a8c7-752978c6808f

_**TODO** [이전 작업 : aiml-project](https://github.com/YYoooonn/aiml-mono)과 합쳐서 생성, 저장, 수정, 공동작업 등 진행해 볼 예정_

## _about_

<img src="https://img.shields.io/badge/vuejs-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white"> <img src="https://img.shields.io/badge/threejs-000000?style=for-the-badge&logo=threedotjs&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

<img src="https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white"> <img src="https://img.shields.io/badge/apollographql-311C87?style=for-the-badge&logo=apollographql&logoColor=white"> <img src="https://img.shields.io/badge/googlegemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white">

### _architecture_

<img width="1200" height="800" alt="Screenshot 2025-07-12 at 5 52 35 AM" src="https://github.com/user-attachments/assets/80023bcc-f9b5-47c0-bd04-b4c0e5bf8b7b" />

### _install_

**dev**
```bash
# at root
# 1. install
pnpm i

# 2. set .env

# 3. run as dev
pnpm --filter web --filter api dev

# access through localhost:5173
```

**production _(wip)_**

## _features_

1. apollo standalone server를 통한 `graphql` bff 서버
2. `vuejs`, `threejs` 를 통한 3차원 Single Page App, 전역 상태 관리를 통한 3차원 객체 생성 및 활용
3. monorepo 활용하여 packages/graphql 분리, codegen을 통한 통합 스키마 및 타입 관리
4. 생성형 ai prompt 설계, gemini 모델의 type을 통한 response 설계
5. shader를 사용한 고성능 animation

## _folder structure_

```bash
vue-mono
├── apps
│   ├── api
│   │   └── src
│   │       ├── mock
│   │       ├── resolvers # graphql resolvers
│   │       │   ├── scene.ts
│   │       │   └── ...
│   │       ├── service # api services
│   │       │   ├── gemini.service.ts
│   │       │   └── ...
│   │       ├── utils
│   │       ├── schema.ts # merged typedefs from @packages/graphql/generated
│   │       ├── index.ts
│   │       └── server.ts # apollo standalone server
│   └── web
│       ├── public
│       ├── src
│       │   ├── assets
│       │   ├── components # .vue files
│       │   │   ├── SceneCanvas.vue
│       │   │   ├── PromptInput.vue
│       │   │   └── ...
│       │   ├── composables # Vue3 composition api
│       │   ├── constants
│       │   ├── graphql # graphql operations
│       │   │   ├── hooks
│       │   │   │   ├── useGenerateScene.ts
│       │   │   │   └── ...
│       │   │   └── client.ts # apollo client
│       │   ├── layouts
│       │   ├── pages
│       │   ├── router # <RouterView />
│       │   ├── stores # global state stores
│       │   ├── utils
│       │   ├── App.vue
│       │   ├── main.ts
│       │   └── vite-env.d.ts
│       ├── index.html # import main.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts # vite build configurations
├── packages
│   └── graphql
│       ├── generated # generated from codegen
│       │   ├── client # types for client - operations (query, mutations)
│       │   └── server # types for server - resolvers
│       ├── scene
│       │   ├── fragments
│       │   ├── operations
│       │   ├── types
│       │   └── schema.graphql # schema for domain
│       ├── codegen.server.ts
│       ├── codegen.client.ts
│       ├── schema.graphql # main schema
│       └── package.json
├── .env
├── package.json
├── pnpm-lock.json
└── pnpm-workspace.yaml
```


