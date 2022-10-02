module.exports = {
	root: true,
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
	env: {
		browser: true,
		node: true,
	},
	extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
	},
};
