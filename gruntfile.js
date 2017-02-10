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
            files: ['gruntfile.js', 'app/stylesheets/*'],
            tasks: ['stylus']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'watch']);
    grunt.registerTask('publish', ['stylus']);
};
