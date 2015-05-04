var elixir = require('laravel-elixir');

var paths = {
    'jquery': './vendor/bower_components/jquery/',
    'bootstrap': './vendor/bower_components/bootstrap/'
};


elixir(function(mix) {
    mix
        .less(['bootstrap/bootstrap.less', 'main.less'], 'public/css')
        .copy(paths.bootstrap + 'fonts', 'public/fonts')
        .styles([
            'public/css/bootstrap.css',
            'public/css/main.css'
        ], 'public/css/app.css', './')
        .scripts([
            paths.jquery + 'dist/jquery.min.js',
            paths.bootstrap + 'dist/js/bootstrap.min.js'
        ], 'public/js/vendor.js', './');
});

elixir(function(mix) {
    mix.version('css/app.css');
});