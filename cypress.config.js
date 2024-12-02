const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://agenda-contatos-react.vercel.app/',
    setupNodeEvents(on, config) {
      // implementa event listeners aqui, se necessário
    },
  },
});
