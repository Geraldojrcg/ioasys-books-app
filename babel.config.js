module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src'
        },
        extensions: ['.ios.js', '.android.js', '.js', '.json']
      }
    ]
  ]
};
