// eslint-plugin-security-node plugin + eslint-plugin-no-unsanitized plugin
import pluginJs from '@eslint/js';
import pluginSecurity from 'eslint-plugin-security';
import pluginSecurityNode from 'eslint-plugin-security-node';
import pluginNoUnsanitized from 'eslint-plugin-no-unsanitized';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.mocha
      }
    },
    plugins: {
      security: pluginSecurity,
      'security-node': pluginSecurityNode,
      'no-unsanitized': pluginNoUnsanitized
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'security/detect-eval-with-expression': 'error',
      'security-node/detect-insecure-randomness': 'warn',
      'no-unsanitized/method': 'warn',
      'no-unsanitized/property': 'warn'
    }
  }
];

