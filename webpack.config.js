const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/js/main.js",
    plugins: [new miniCssExtractPlugin()],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: () => [require("autoprefixer")],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                quietDeps: ["node_modules/bootstrap/**/*.scss"],
                            },
                        },
                    },
                ],
            },
        ],
    },
};
