import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages にデプロイする場合は base をリポジトリ名に変更する
// 例: base: '/my-portfolio/'
// ローカル開発・カスタムドメイン運用時は './' のままでOK
export default defineConfig({
  plugins: [react()],
  base: './',
})
