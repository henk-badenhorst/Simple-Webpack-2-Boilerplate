const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var isProd = process.env.NODE_ENV === 'production'

const cssDev = ['style-loader', 'css-loader', 'sass-loader']
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  loader: ['css-loader', 'sass-loader']
})

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {

  entry: {
    'js/app': './src/js/app'
  },

output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
},

    module:{
        rules:[
            {
                test:  /\.scss$/,
                use: cssConfig
            }
           ,{
                test:  /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                exclude: /fonts/,
                options: {
                    //useRelativePath: isProd,                      // -- Force relative path -- //                      
                    name: '[name].[ext]',                           // -- Keep naming conventions -- /
                    outputPath: 'images/',
                    publicPath: '../'
                }
            }
            ,{
                test:  /\.(eot|otf|webp|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                exclude: /images/,
                options: {
                    //useRelativePath: isProd,                      // -- Force relative path -- //                      
                    name: '[name].[ext]',                           // -- Keep naming conventions -- //
                    outputPath: 'fonts/',
                    publicPath: '../'
                }
            }
        ]
    },
    

    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,                                             // -- gzip files for production -- //
        hot: true,
        port: 3000,                                                 // -- Change localhost port -- //
        stats: "errors-only",                                       // -- Remove all the unnessesary output from console - SHOW ONLY ERRORS -- //
        open: true                                                  // -- Open new window in defult browser when 'npm run dev' initiates server --//
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Henk\'s Webpack Template',
            minify:{
                collapseWhitespace: true                            // -- Optinally minify generated html -- //
            },
            hash: true,                                             // -- Optinally hash files for  UAT versioning & other reasons -- //
            template: './src/index.html',                           // -- Load a custom template (could use .ejs instad of .html) -- //
        }),
        new ExtractTextPlugin({
            filename: 'css/styles.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}