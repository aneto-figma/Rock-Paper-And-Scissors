// Web bundler config for Figma Make.
// Runs the Expo (react-native-web) app through webpack directly so the dev
// server binds a single, deterministic port instead of relying on the legacy
// expo-cli launcher.
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env = {}, argv) {
  env.projectRoot = env.projectRoot || __dirname;
  env.mode = env.mode || 'development';
  env.platform = env.platform || 'web';
  const config = await createExpoWebpackConfigAsync(env, argv);
  return config;
};
