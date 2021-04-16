const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              data: `
                @import "@/sass/variables/_colors.scss";
                @import "@/sass/helpers/_mixins.scss";
              `,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
};