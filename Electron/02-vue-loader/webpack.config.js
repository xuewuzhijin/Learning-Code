const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '02-vue-loader/src/main.js'),
    output: {
        path: path.join(__dirname, './'),
        filename: '[name]d.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [ 'vue-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}