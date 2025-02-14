module.exports = ({ config }) => ({
  ...config,
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  }
}); 