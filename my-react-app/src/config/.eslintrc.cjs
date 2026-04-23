module.exports = {
  // A. Environment and Root Settings
  root: true,
  env: {
    browser: true,
    es2020: true,
  },

  // B. Extended Configurations (The Core)
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // Recommended for React 17+
    'plugin:prettier/recommended', // Must be last to turn off conflicts
  ],

  // C. Parser Options
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // D. Plugin Settings
  settings: {
    react: {
      version: 'detect', // Auto-detect the React version
    },
  },

  // E. Custom Rules and Prettier Integration
  rules: {
    'react/prop-types': 'off', // Example: turn off prop-types warning (common in modern React)
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        'singleQuote': true,
        'semi': false
      }
    ]
  },
}