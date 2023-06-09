
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'localhost:8000/',
      secure: false,
      changeOrigin: true,
    })
  );
};