module.exports = function(config) {
    config.set({
        basePath: '../',
        files: [
            'client_gabarito/bower_components/angular/angular.js',
            'client_gabarito/bower_components/angular-mocks/angular-mocks.js',
            'client_gabarito/app_ts/app.module.js',
            'client_gabarito/app_ts/**/*.js'
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};
