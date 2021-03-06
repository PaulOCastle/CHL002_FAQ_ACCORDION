const CopyPlugin = require('copy-webpack-plugin')
const HandlebarsPlugin = require('handlebars-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const paths = {
    src: {
        images: './src/images',
        js: './src/js',
        sass: './src/sass',
    },
    dist: {
        images: './assets/images',
        js: './assets/js',
        css: './assets/css',
    },
}

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
      'main': [
          paths.src.js + '/scripts.js',
          paths.src.sass + '/styles.scss',
      ],
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/[name].[ext]',
                        outputPath: '../images',
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                    },
                },
                cssProcessorPluginOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true,
                            },
                        },
                    ],
                },
            }),
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    output: {
        filename: paths.dist.js + '/[name].bundle.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: paths.src.images,
                    to: paths.dist.images,
                },
            ],
        }),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), 'src', 'html', '**', '*.html'),
            output: path.join(process.cwd(), 'dist', '[path]', '[name].html'),
        }),
        new MiniCssExtractPlugin({
            filename: paths.dist.css + '/[name].bundle.css',
        }),
        new CleanWebpackPlugin({
            options: {
                output: path.resolve(__dirname, './dist'),
            },
        }),
    ],
}