import fiskerEslintConfig from '@fisker/eslint-config'

export default [
  {ignores: ['data/*', '.cache/*', 'index.js']},
  ...fiskerEslintConfig,
  {
    rules: {
      'unicorn/max-nested-calls': 'off',
    },
  },
]
