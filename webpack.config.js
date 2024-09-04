var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Para arquivos .js e .jsx
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, // Para arquivos .css
                use: ['style-loader', 'css-loader'] // Loaders para processar CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,  // Para arquivos de imagem
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',  // Nome do arquivo com hash para evitar cache
                            outputPath: 'assets/images',  // Caminho de saída para as imagens
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // Configuração global para a API
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}
