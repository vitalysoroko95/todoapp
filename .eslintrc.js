// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',

  "parser": "@typescript-eslint/parser",
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "rules": {
    "import/no-internal-modules": [
      "warn",
      {
        "allow": [
          "**/ui/*",
          "pages/*",
          "processes/*",
          "widgets/*",
          "features/*",
          "entities/*",
          "shared/*"
        ]
      }
    ]
  }

};
