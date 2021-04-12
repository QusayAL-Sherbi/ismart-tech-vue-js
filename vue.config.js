module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/sass/variables/_colors.scss";
          @import "@/sass/helpers/_mixins.scss";
        `
      }
    }
  }
};