module.exports = {
  "presets": [
    "@docusaurus/core/lib/babel/preset",
    "@babel/preset-typescript"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@lithium-framework/core-dom/*": "./node_modules/@lithium-framework/core-dom/*",
        "@lithium-framework/core/*": "./node_modules/@lithium-framework/core/*"
      }
    }]
  ]
}
;
