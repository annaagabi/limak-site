# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Comando para rodar o dist: serve dist


### 3. Imagens Não Otimizadas (ALTO)
**Impacto:** Performance ruim, UX degradada

**Exemplos:**
- `banner1.jpg` - 2.3 MB
- `banner2.png` - 1.8 MB

**Solução:**
```bash
# Converter para WebP
npx @squoosh/cli --webp auto images/*.jpg
```


node .\src\assets\js\convert.js 

npm run build

serve dist   