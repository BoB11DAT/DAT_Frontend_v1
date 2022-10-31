module.exports = {
	root: true,
	env: {
		browser: true,
    es2021: true,
		node: true,
	},
	extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['.eslintrc.js'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
	},
};
