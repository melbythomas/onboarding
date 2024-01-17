module.exports = {

  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'babel-preset-react-native-web',
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    // 'react-native-reanimated/plugin',
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
