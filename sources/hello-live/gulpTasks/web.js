(function () {
    'use strict';

    function RegisterTasks(gulp, config) {
        var del = require('del'),
            path = require('path'),
            runSequence = require('run-sequence'),
            server = require('gulp-server-livereload'),
            watch = require('gulp-watch'),
            batch = require('gulp-batch'),
            cssmin = require('gulp-minify-css'),
            filelog = require('gulp-filelog'),
            concat = require('gulp-concat'),
            ts = require('gulp-typescript'),
            tsConfig = ts.createProject(config.ts.config),
            sourcemaps = require('gulp-sourcemaps'),
            inject = require('gulp-inject'),
            uglify = require('gulp-uglify'),
            watch = require('gulp-watch'),
            Builder = require('systemjs-builder');

        gulp.task('[private-web]:copy-template', function () {
            var sources = gulp.src(config.source.files.injectables);

            return gulp.src(config.source.files.main)
                .pipe(inject(sources, { addRootSlash: false, ignorePath: 'dist/www' }))
                .pipe(gulp.dest(path.join(config.targets.buildFolder)));
        });
        
        gulp.task('[private-web]:bundle-vendor-scripts', function () {
            var builder = new Builder();

            return builder.loadConfig(config.systemJsConfig)
                .then(function () {
                    var promises = [];

                    config.source.files.vendorJs.forEach(function (jsFile) {
                        promises.push(builder.bundle(jsFile, path.join(config.targets.buildFolder, 'scripts/bundles/', path.basename(jsFile))));
                    });
                    
                    return Promise.all(promises);
                })
        });

        gulp.task('[private-web]:copy-angular2-scripts', function () {
            return gulp.src(config.source.files.angular2)
                .pipe(concat(config.targets.angular2MinJs))
                //.pipe(uglify())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')));
        });

        gulp.task('[private-web]:copy-system-setup-script', function () {
            return gulp.src(config.source.files.systemSetupScript)
                .pipe(uglify())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')));
        });
        
        gulp.task('[private-web]:copy-shim', function () {
            // es6shim cant be bundled with angular-polyfills see https://github.com/angular/angular/issues/6706
            return gulp.src(config.source.files.shim)
                .pipe(uglify())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')))
        });

        gulp.task('[private-web]:copy-fonts', function () {
            return gulp.src(config.source.files.vendorFonts)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'fonts')));
        });

        gulp.task('[private-web]:copy-app-assets', function () {
            return gulp.src(config.source.files.app.assets)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('[private-web]:vendor-css', function () {
            return gulp.src(config.source.files.vendorStylesheets)
                .pipe(concat(config.targets.vendorMinCss))
                .pipe(cssmin())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.stylesFolder)));
        });

        gulp.task('[private-web]:copy-app-styles', function () {
            return gulp.src(config.source.files.app.css)
                .pipe(cssmin())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.stylesFolder)));
        });

        gulp.task('[private-web]:copy-component-styles', function () {
            return gulp.src(config.source.files.app.componentCss)
                .pipe(cssmin())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });


        gulp.task('[private-web]:copy-app-html', function () {
            return gulp.src(config.source.files.app.html)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('[private-web]:build-app-scripts', function () {
            return gulp.src(config.source.files.app.ts)
                .pipe(sourcemaps.init())
                .pipe(ts(tsConfig))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('[private-web]:watch:no-liveserver', function () {
            return deltaWatch();
        });
        
        gulp.task('build-web', function (done) {
            return runSequence(
                'clean',
                [
                    '[private-web]:bundle-vendor-scripts',
                    '[private-web]:copy-angular2-scripts',
                    '[private-web]:copy-system-setup-script',
                    '[private-web]:copy-shim',
                    '[private-web]:build-app-scripts',
                    '[private-web]:vendor-css',
                    '[private-web]:copy-fonts',
                    '[private-web]:copy-app-html',
                    '[private-web]:copy-app-styles',
                    '[private-web]:copy-component-styles',
                    '[private-web]:copy-app-assets'
                ],
                '[private-web]:copy-template',
                done
            );
        });

        gulp.task('[private-web]:start-live-server', ['build-web'], function () {
            return gulp.src(config.targets.buildFolder)
                .pipe(server({
                    livereload: true,
                    open: true
                }));
        });

        gulp.task('watch-web', ['[private-web]:start-live-server'], function () {
            deltaWatch();
        });

        function deltaWatch() {
            return watch(config.source.files.app.everything, batch(function (events, done) {
                console.log(arguments);

                runSequence('[private-web]:copy-system-setup-script', '[private-web]:copy-app-html', '[private-web]:build-app-scripts', done);
            }));
        }
    }

    module.exports = {
        init: RegisterTasks
    };
})();
