import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' gera caminhos relativos, o que faz os assets funcionarem tanto
// em site de usuario (usuario.github.io) quanto em site de projeto
// (usuario.github.io/repositorio) sem precisar ajustar nada.
export default defineConfig({
  plugins: [react()],
  base: './',
})
