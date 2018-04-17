"use strict";

module.exports =  (options, $) => {
    return (done) => {
        return $.combine($.gulp.src(options.war.src),
            $.zip(options.zip.name),
            $.gulp.dest(options.zip.dest),
            $.size({title: "zip"}),
            $.notify({
                title   : "Gulp Task Complete",
                message : "Archiving have been compiled",
                sound: false
            })
        )
    }
}