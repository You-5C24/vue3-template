import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  base: './', // 打包路径
  plugins: [vue(), vueJsx(), visualizer(), Components({ resolvers: [NaiveUiResolver()], dts: true, include: [/\.vue$/, /\.vue\?vue/, /\.md$/] })],
  // 别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts']
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // 去除console
        drop_debugger: true // 去除debugger
      }
    }
  }
});
