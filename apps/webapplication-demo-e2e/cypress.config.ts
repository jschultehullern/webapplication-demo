import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run webapplication-demo:serve:development',
        production: 'nx run webapplication-demo:serve:production',
      },
      ciWebServerCommand: 'nx run webapplication-demo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };

      on('file:preprocessor', cucumber(options));
    },
    specPattern: '**/*.{feature,features}',
  },
});
