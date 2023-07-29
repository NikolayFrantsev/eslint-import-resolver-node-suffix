# eslint-import-resolver-node-suffix

Default Node-style module resolution plugin for [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) with file suffix support.

Plugin stripps suffix and passes resolution back to [`eslint-import-resolver-node`](https://www.npmjs.com/package/eslint-import-resolver-node).

## Installation

Install package:

```sh
npm install eslint-import-resolver-node-suffix --save-dev
```

Update ESLint configuraton for [`import/resolver`](https://github.com/import-js/eslint-plugin-import/tree/main#resolvers):

```js
"settings": {
  "import/resolver": {
    "node-suffix": true
  }
}
```