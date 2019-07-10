const path = require('path')

module.exports = {
    mode: 'development',
    entry: __dirname + './main.js',
    output: {
        path: __dirname + './',
        filename: '[name]d.js'
    }
}