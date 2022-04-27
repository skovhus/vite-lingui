const path = require('path')
const { mergeConfig } = require('vite')
const macrosPlugin = require('vite-plugin-babel-macros').default

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // NOTE we could use vite.mergeConfig, but this makes it a bit easier to ensure the right ordering
    // of plugins:

    config.define = {
      global: {}, // Otherwise node_modules/jest-mock/build/index.js fails with "global is not defined"
    }

    config.plugins = [macrosPlugin(), ...config.plugins]

    return config
  },
}
