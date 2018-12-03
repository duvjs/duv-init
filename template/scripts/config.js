const path = require('path')
const resolve = path.resolve
const glob = require('glob')
const createVariants = require('parallel-webpack').createVariants
const {VueLoaderPlugin, DuvPlugin} = require('duv-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const supportList = ['wx','bd']


function getEntry(rootSrc, pattern) {
    let files = glob.sync(path.resolve(rootSrc, pattern))
    return files.reduce((res, file) => {
        let info = path.parse(file)
        let key = info.dir.slice(rootSrc.length + 1) + '/' + info.name
        res[key] = path.resolve(file)
        return res
    }, {})
}
let appEntry = {
    app: resolve('./src/app.js')
}
let pagesEntry = getEntry(resolve('./src'), 'pages/**/main.js')
let componentsEntry = getEntry(resolve('./src'), 'components/**/main.js')
let entry = Object.assign({}, appEntry, pagesEntry, componentsEntry)

let arguments = process.argv || []
let duvType = arguments.filter(element => supportList.includes(element))

let variants = {
    duvType: duvType.length ? duvType : supportList
}

function createConfig(options) {
    let cssType = options.duvType === 'bd' ? 'css' : 'wxss'
    return {
        devtool: false,
        mode: 'development',
        entry: entry,
        output: {
            path: path.resolve(__dirname,'../', './dist/' + options.duvType),
            filename: path.posix.join('static', 'js/[name].js'),
            globalObject: 'global'
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './src/images/*',
                    to: 'images/[name].[ext]',
                    toType: 'template'
                }
            ], {}),
            // new CleanWebpackPlugin(['./dist']),
            new MiniCssExtractPlugin({
                filename: path.posix.join('static', 'css/[name].' + cssType),
                sourcemap: false
            }),
            new VueLoaderPlugin(),
            new DuvPlugin()
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    common: {
                        // test: /[\\/]node_modules[\\/]/,
                        test: /\.js$|\.css$/,
                        name: "common",
                        chunks: "initial",
                        minChunks: 2,
                        minSize: 0
                    }
                },
            },
            runtimeChunk: {
                name: 'manifest'
            }
        },
        resolve: {
            alias: {
                'vue': 'duvjs',
            },
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'duv-loader',
                            options: {
                                duvType: options.duvType
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../'
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                    ]
                }
            ]
        }
    }
}

module.exports = createVariants(variants, createConfig);
