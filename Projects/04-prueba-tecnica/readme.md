# Prueba Técnica

APIs (end points):

- https://catfact.ninja/fact
- https://cataas.com/cat/says/hello

Recupera un hecho (fact) aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del hecho (fact) recuperado usando la segunda api

1. Recupera un hecho (fact) aleatorio de gatos de la primera API
2. Recuperar la primera palabra del hecho 
3. Muestra una imagen de un gato con la primera palabra del hecho (fact) recuperado usando la segunda api

# Vite
  npm create vite@latest (Nombre proyecto + React + JavaScript + SWC)
  cd 04-prueba-tecnica
  npm install
  npm run dev

# Comenzar desde cero (para crear el punto de entrada desde el pincipio)
  npm create vite@latest (Nombre proyecto + Vanilla + Javascript)
  cd 04-prueba-tecnica
  npm install @vitejs/plugin-react -E /* Plugging de vite para React */
  npm install react react-dom -E /* Instalar las dependencias */
  vite.config.js /* crear la configuración de Vite */
  index.html
  main.js => main.jsx /* Para poder utilizar el plugin de Vite */
  
  npm run dev

  npm install standard -D  /* instalar el linter */

  src/App.jsx 

# Tests 
- Playwright
  npm init playwright@latest

  playwright.config.js => playwright.config.cjs
  test => import
  npx playwright test
  
# Ideas
- Hay que utilizar dos estados, uno depende del otro
- Codificar hasta que funcione
- Refactorizar
- Test (el más importante es el test end-to-end)
- Busquedas: mdn... separar (para buscar la documentación)
- Primero reslover el "happy path" y luego ponerse con la gestión de errores (handling de errores)