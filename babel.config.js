module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          "assets": "./src/assets",
          "components": "./src/components",
          "screens": "./src/screens",
          "navigators": "./src/navigators",
          "services": "./src/services",
          "images": "./src/assets/images",
          "store": "./src/store",
        }
      }
    ]
  ]
};
