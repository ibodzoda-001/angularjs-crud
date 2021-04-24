module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: [
                    'assets/js/*.js',
                    'assets/css/production.css'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
            }
        },
        sass: {
            development: {
                options: {
                    paths: ["app"],
                    compress: true
                },
                files: {
                    "app/app.sass": "app/app/css"
                }
            }
        }
    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['watch', 'sass']);
};
