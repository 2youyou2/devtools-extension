var BrowserWindow = require('browser-window');
var Path = require('fire-path');

var extensions = [
    'CoffeeConsole/src'
];


module.exports = {
    load: function () {
        extensions.forEach (function (extension) {
            var extensionDir = Path.join(__dirname, extension);
            BrowserWindow.addDevToolsExtension(extensionDir);
        });
    },

    unload: function () {
        extensions.forEach (function (extension) {
            var extensionDir = Path.join(__dirname, extension);
            var Manifest = require(Path.join(extensionDir, 'manifest.json'));
            BrowserWindow.removeDevToolsExtension(Manifest.name);
        });
    }
}