import pluginReact from "eslint-plugin-react";
import parser from '@typescript-eslint/parser'


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,ts,mjs,cjs,tsx,jsx}"],
    languageOptions: {
      parser: parser,
      sourceType: "module",
      ecmaVersion: 'latest'
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 'off'
    },
  },
];