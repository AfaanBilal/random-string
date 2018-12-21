/**
 * random-string
 * Generate random strings of any length with an optional prefix (non-crypto use only).
 * 
 * Author: Afaan Bilal
 */

module.exports = function randomString(options) {
    var defaultOptions = {
        length: 16,
        prefix: '',
        charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    };

    options = Object.assign({}, defaultOptions, options);

    var str = '';
    for (var i = 0; i < options.length; i++) {
        str += options.charset.charAt(Math.floor(Math.random() * options.charset.length));
    }

    return options.prefix + str;
};
