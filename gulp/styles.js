"use strict";

module.exports =  (options, $) => {
    const argv = $.minimist(process.argv.slice(2));
    const RELEASE = !!argv.release;

    return (done) => {
        var injectFiles = $.gulp.src([
            $.path.join(options.src.root, '/app/**/*.scss')
        ], { read: false });

        var injectOptions = {
            transform: function(filePath) {
                filePath = filePath.replace(options.src.root, '..');
                return '@import "' + filePath + '";';
            },
            starttag: '// injector',
            endtag: '// endinjector',
            addRootSlash: false
        };

        return $.combine( $.gulp.src(`${options.src.styles}/*.scss`),
            $.inject(injectFiles, injectOptions),
            $.if(!RELEASE, $.sourcemaps.init()),
            $.sass(),
            $.autoprefixer({browsers: [    
                "> 1%",         
                "ie >= 10",
                "ie_mob >= 10",
                "last 2 versions"
            ]}),
            $.if(!RELEASE, $.sourcemaps.write({sourceRoot: options.src.styles})),
            $.if(!RELEASE, $.replace("../fonts/bootstrap", "../../node_modules/bootstrap-sass/assets/fonts/bootstrap")),
            // $.if(RELEASE, $.combine($.cssnano(), $.rename({suffix: ".min", extname: ".css" }),  $.rev())),
            $.gulp.dest(options.build.styles),
            $.size({title: "styles"})
        ).on("error", function(error)  {
            $.util.reportError.apply(this, [error, options.taskName]);
        });
    }
}