module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register'
  ],
  stories: [
    '../src/**/*.stories.[tj]s',
  ],
};
