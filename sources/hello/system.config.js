System.config({
    baseURL: './src/Hello/vendor/',
    paths: {
        "*": "*.js"
    },
    meta: {
        'jquery': {
            build: false
        },
        'hammerjs': {
            build: false
        }
    }
});
