"use strict";

module.exports =  (options, $) => {
    return (done) => {
        return $.combine($.gulp.src(options.src.images),
            $.changed(options.build.images),
            $.cache($.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [require("imagemin-pngquant")],
                interlaced: true
            })),
            $.gulp.dest(options.build.images),
            $.size({title: "images"})
        ).on("error", (error) => {
            $.util.reportError.call(this, error, options.taskName);
        });
    }
}