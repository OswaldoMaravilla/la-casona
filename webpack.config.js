var webpack = require('webpack'),
    path = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    PATHS = {
        app : __dirname + "/app"
    };

module.exports = {
    context: PATHS.app,
    entry: "./js/index.js",
    output: {
        path: PATHS.app,
        filename: "/js/bundle.min.js"
    },
    module: {
        loaders:[
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.(woff|woff2)$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BrowserSyncPlugin({
            proxy: 'localhost:8080'
        }, {
            name: 'bs-instance',
            callback: function() {
                console.log('browserSync started!');
            },
            reload: true
        })
    ]
};