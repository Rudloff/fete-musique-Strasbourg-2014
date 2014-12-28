/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        uglify: {
            combine: {
                files: {
                    'dist/main.js': ['main.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/main.css': ['style.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['uglify']
            },
            styles: {
                files: ['*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};
