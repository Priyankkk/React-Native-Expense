const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.watchFolders = []; // Prevents Metro from watching extra folders

defaultConfig.resolver.blacklistRE = /node_modules\/(?!@react-navigation)/;

module.exports = defaultConfig;
