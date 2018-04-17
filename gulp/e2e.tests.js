"use strict";

module.exports =  (options, $) => {
  const browserSync= require('browser-sync').get("admin")
  const argv = $.minimist(process.argv.slice(2));
  const RELEASE = !!argv.release;

    return (done) => {
      var params = process.argv;
      var args = params.length > 3 ? [params[3], params[4]] : [];
          
      return $.gulp.src(path.join("e2e", "/**/*.js"))
        .pipe($.protractor.protractor({
          configFile: "protractor.conf.js",
          args: args
        }))
        .on("error", function (err) {
          throw err;
        })
        .on("end", function () {
          browserSync.exit();
          done();
        });
    }
}

