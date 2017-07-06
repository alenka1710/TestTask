module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "globals": {
    "fetch": false
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y"
  ],
  "rules": {
    "jsx-a11y/img-has-alt": [0],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-console": [
      "warn",
      {
        "allow": ["info", "error", "warn"]
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "react/forbid-prop-types": [
      "off"
    ],
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": [
      "error",
      {
        "ignore": [
          "children",
          "params"
        ]
      }
    ],
    "react/prefer-stateless-function": [0],
    "func-names": [
      "error",
      "never"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": ["_id"]
      }
    ]
  }
};
