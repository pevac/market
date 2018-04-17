"use strict";

module.exports =  (options, $) => {
    const argv = $.minimist(process.argv.slice(2));
    const RELEASE = !!argv.release;

    return (done) => {
        return $.combine( $.gulp.src(`${options.src.styles}/*.scss`),
            $.if(!RELEASE, $.sourcemaps.init()),
            $.sass(),
            $.autoprefixer({browsers: [    
                "> 1%",         
                "ie >= 10",
                "ie_mob >= 10",
                "last 2 versions"
            ]}),
            $.if(!RELEASE, $.sourcemaps.write({sourceRoot: options.src.styles})),
            // $.if(RELEASE, $.replace("../node_modules/bootstrap-sass/assets/fonts/bootstrap/", "../assets/fonts/bootstrap/")),
            // $.if(RELEASE, $.combine($.cssnano(), $.rename({suffix: ".min", extname: ".css" }),  $.rev())),
            $.gulp.dest(options.build.styles),
            $.size({title: "styles"})
        ).on("error", function(error)  {
            $.util.reportError.apply(this, [error, options.taskName]);
        });
    }
}