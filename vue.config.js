// concessionaria-front/vue.config.js
module.exports = {
    // Opções do Vue CLI
    publicPath: '/', // Define o caminho base para os assets
    outputDir: 'dist', // Define o diretório de saída do build
    assetsDir: 'assets', // Define o diretório para os assets gerados
    indexPath: 'index.html', // Define o caminho para o arquivo index.html
    filenameHashing: true, // Ativa/desativa a hashing nos nomes dos arquivos gerados
  
    // Opções específicas do Vue 3
    chainWebpack: config => {
      // Configurações específicas do Webpack usando o ChainWebpack
      // Exemplo: configurar o loader do SVG para lidar com arquivos .svg
      config.module
        .rule('svg')
        .use('file-loader')
        .loader('file-loader')
        .tap(options => {
          options = {
            name: 'assets/[name].[hash:8].[ext]',
          };
          return options;
        });
    },
  
 
  
    // Configurações do servidor de desenvolvimento
    devServer: {
      port: 8080, // Porta para o servidor de desenvolvimento
      open: true, // Abre automaticamente o navegador ao iniciar o servidor
      proxy: {
        // Exemplo de proxy para backend
        '/api': {
          target: 'http://localhost:3000', // URL do backend
          ws: true,
          changeOrigin: true
        }
      }
      // Outras configurações do servidor, se necessário
    },
  
    // Configurações de produção
    productionSourceMap: false, // Desativar source maps na produção para melhorar o desempenho
    // Outras configurações de produção, se necessário
  };
  