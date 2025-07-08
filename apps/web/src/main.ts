import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql/client'
import '@/assets/styles/base.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router)
app.use(pinia)
app.mount('#app')
