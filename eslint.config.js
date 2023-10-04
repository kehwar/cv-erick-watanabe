import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  componentExts: ['vue'],
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
