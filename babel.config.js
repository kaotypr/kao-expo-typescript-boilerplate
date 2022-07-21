module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: "./",
          alias: {
            "@@types": "./src/@types",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
            "@navigations": "./src/navigations",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@styles": "./src/styles"
          }
        }
      ]
    ]
  };
};
