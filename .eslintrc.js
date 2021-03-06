module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	  'space-before-function-paren': 0,
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'space-in-parens': 0,
		'object-curly-spacing': 0,
		'no-trailing-spaces': 0,
		'no-trailing-spaces': 0,
		'no-unused-vars': 0
  }
}
