import eslintJs from '@eslint/js'
import tsEslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    //---- GLOBAL IGNORES
    ignores: ['**/dist/', '**/vendor/', '**/generated/'],
  },
  // general defaults
  eslintJs.configs['recommended'],
  // general
  {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  },

  // chosen typescript defaults - could not get this working
  ...tsEslint.configs['recommended'],
  // typescript
  {
    files: ['**/*.{ts,tsx,vue}'],
    languageOptions: {
      parser: tsEslint.parser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // chosen vue defaults
  ...pluginVue.configs['flat/essential'],
  // vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser, // parse TS inside VUE
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off', // allow single word component names
      'vue/no-v-html': 'off', // allow v-html
      'vue/require-default-prop': 'off', // allow props without default values
    },
  },
]
