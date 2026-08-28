// Programmatic web dev server for Figma Make.
// Uses the webpack-dev-server 3 API directly so we don't depend on a matching
// webpack-cli version, and so the port is fully deterministic.
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configFactory = require('./webpack.config');

const PORT = Number(process.env.PORT) || 19006;
const HOST = '0.0.0.0';

(async () => {
  try {
    const config = await configFactory({ platform: 'web', mode: 'development' });
    const compiler = webpack(config);
    const devServerOptions = Object.assign({}, config.devServer, {
      host: HOST,
      port: PORT,
      stats: 'minimal',
      disableHostCheck: true,
    });
    const server = new WebpackDevServer(compiler, devServerOptions);
    server.listen(PORT, HOST, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Web dev server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
