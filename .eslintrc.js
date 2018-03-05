module.exports = {
  "root": true,
  "parser": 'babel-eslint',
  "parserOptions": {
    "sourceType": 'module'
  },
  "env": {
    "browser": true,
  },
  "extends": "standard",
  "globals": {
    "__DEV__": false,
    "__PRODUCTION": false,
    "__LOCAL_CONFIG__": false,
    "Rx": true,
    "UBT": true
  },
  "plugins": [
    "html"
  ],
  "rules": {
    "arrow-parens": [2, "as-needed"],
    "generator-star-spacing": [0],
    "semi": [0, "always"],
    "no-multi-spaces": [2, {
      "exceptions": {
        "VariableDeclarator": true,
        "ImportDeclaration": true,
        "AssignmentExpression": true
      }
    }],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-function-paren": [0],
    "padded-blocks": [0],
    "comma-dangle": [0],
    'one-var': [0],
    'indent': ['error', 2,
      {
        'VariableDeclarator': {
          'var': 2,
          'let': 2,
          'const': 3
        },
        'SwitchCase': 1
      }
    ]
  }
}
