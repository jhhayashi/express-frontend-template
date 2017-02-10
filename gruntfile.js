module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // https://github.com/gruntjs/grunt-contrib-stylus
        stylus: {
            compile: {
                options: {},
                files: {
                    'public/stylesheets/style.css': 'app/stylesheets/style.styl'
                }
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            css: {
                files: ['gruntfile.js', 'app/stylesheets/*'],
                tasks: ['stylus'],
                options: { livereload: 10000 },
            },
            js: {
                files: ['gruntfile.js', 'app/js/*'],
                tasks: [],
                options: { livereload: 10000 },
            },
            html: {
                files: ['app/views/*'],
                tasks: [],
                options: { livereload: 10000 },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'watch']);
    grunt.registerTask('publish', ['stylus']);
};
