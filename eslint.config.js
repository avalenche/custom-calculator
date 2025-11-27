import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';

export default [
  // Standard ESLint Recommended Rules
  js.configs.recommended,
  { ignores: ['dist/*', 'node_modules/*'] },
  // Configuration for the browser environment and ES modules
  {
    files: ['src/**/*.js', 'webpack.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // Add custom rules here if needed
    },
  },

  {
    files: ['babel.config.cjs'],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
  },

  // Configuration for Jest test files
  {
    files: ['src/**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },

    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
    languageOptions: {
      globals: globals.jest,
    },
  },

  // MUST be last: Integrates Prettier rules
  prettier,
];
