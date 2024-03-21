module.exports = {
  components: {
    entry: 'src/components',
    prefix: 'h',
    external: ['vue'],
    globals: {
      vue: 'Vue',
    },
  },
  lib: {
    entry: 'src/App.vue',
    pluginName: 'ui',
    external: ['vue'],
    globals: {
      vue: 'Vue',
    },
  },
  app: {
    entry: 'src/index.ts',
    devtool: 'source-map',
    publicPath: '/',
    statciDir: 'public',
    mode: 'production',
    externals: {
      'vue': 'Vue',
      'pinia': 'Pinia',
      'vue-demi': 'vueDemi',
    },
    htmlExternals: [
      {
        module: 'vue',
        entry: 'https://unpkg.com/vue@3/dist/vue.global.js',
        global: 'Vue',
      },
      {
        module: 'vue-demi',
        entry: 'https://cdn.jsdelivr.net/npm/vue-demi@0.14.7/lib/index.iife.min.js',
        global: 'vueDemi',
      },
      {
        module: 'pinia',
        entry: 'https://cdnjs.cloudflare.com/ajax/libs/pinia/2.1.7/pinia.iife.js',
        global: 'Pinia',
      },
    ],
  },
  dev: {
    server: {
      host: true,
      proxy: {
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  },
}
