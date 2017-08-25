// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html',
    'eslint-comments',
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': 'off',
    'strict': 0,
    'indent': [
      'error',
      2,
      {'SwitchCase': 1}
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-useless-concat': [
      'error'
    ],
    'prefer-template': [
      'error'
    ],
    'no-template-curly-in-string': [
      'error'
    ],
    'class-methods-use-this': [
      'warn'
    ],
    'consistent-return': [
      'error'
    ],
    'curly': [
      'warn',
      'multi-line',
      'consistent'
    ],
    'default-case': [
      'error'
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'dot-notation': [
      'warn'
    ],
    'eqeqeq': [
      'error'
    ],
    'no-empty-function': [
      'error'
    ],
    'no-floating-decimal': [
      'error'
    ],
    'no-invalid-this': [
      'error'
    ],
    'no-lone-blocks': [
      'error'
    ],
    'no-multi-spaces': [
      'error'
    ],
    'no-param-reassign': [
      'warn'
    ],
    'no-self-compare': [
      'error'
    ],
    'no-sequences': [
      'error'
    ],
    'no-unmodified-loop-condition': [
      'error'
    ],
    'no-unused-expressions': [
      'warn'
    ],
    'no-useless-return': [
      'warn'
    ],
    'require-await': [
      'error'
    ],
    'yoda': [
      'warn'
    ],
    'vars-on-top': [
      'warn'
    ],
    'block-scoped-var': [
      'warn'
    ],
    'no-shadow': [
      'error',
      {
        'builtinGlobals': true,
        'hoist': 'all'
      }
    ],
    'no-shadow-restricted-names': [
      'error'
    ],
    'no-undef-init': [
      'warn'
    ],
    'no-new-require': [
      'error'
    ],
    'no-mixed-requires': [
      'error'
    ],
    'handle-callback-err': [
      'error',
      '^.*(e|E)rr'
    ],
    'global-require': [
      'error'
    ],
    'no-use-before-define': [
      'error',
      'nofunc'
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'brace-style': [
      'warn',
      'stroustrup'
    ],
    'comma-dangle': [
      'warn',
      'always-multiline'
    ],
    'comma-spacing': [
      'error'
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'computed-property-spacing': [
      'error'
    ],
    'eol-last': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1,
        'maxBOF': 1
      }
    ],
    'func-style': [
      'warn',
      'declaration',
      {'allowArrowFunctions': true}
    ],
    'key-spacing': [
      'error'
    ],
    'keyword-spacing': [
      'error'
    ],
    'max-depth': [
      'warn'
    ],
    'max-len': [
      'warn',
      100,
      2
    ],
    'max-nested-callbacks': [
      'warn'
    ],
    'new-cap': [
      'error'
    ],
    'new-parens': [
      'error'
    ],
    'no-lonely-if': [
      'error'
    ],
    'no-mixed-operators': [
      'error',
      {'groups': [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ]}
    ],
    'no-negated-condition': [
      'warn'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'no-unneeded-ternary': [
      'error'
    ],
    'no-whitespace-before-property': [
      'error'
    ],
    'object-curly-spacing': [
      'error'
    ],
    'object-property-newline': [
      'warn'
    ],
    'space-before-blocks': [
      'error'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-in-parens': [
      'error'
    ],
    'space-infix-ops': [
      'error'
    ],
    'arrow-body-style': [
      'error'
    ],
    'constructor-super': [
      'error'
    ],
    'arrow-spacing': [
      'error'
    ],
    'no-confusing-arrow': [
      'warn',
      {'allowParens': true}
    ],
    'no-duplicate-imports': [
      'error'
    ],
    'no-useless-constructor': [
      'warn'
    ],
    'no-useless-rename': [
      'warn'
    ],
    'no-var': [
      'error'
    ],
    'prefer-arrow-callback': [
      'warn'
    ],
    'prefer-const': [
      'error'
    ],
    'prefer-spread': [
      'warn'
    ],
    'rest-spread-spacing': [
      'error'
    ],
    'template-curly-spacing': [
      'error'
    ],
    'no-console': [
      'error',
      {
        'allow': [
        'log',
        'warn',
        'error'
        ]
      }
    ],
  },
}
