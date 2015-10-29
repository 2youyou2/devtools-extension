var Extension = require('./extension');

module.exports = {
    load: function () {
        Extension.load();
    },

    unload: function () {
        Extension.unload();
    },

    'devtools-extension:open': function () {
        Editor.Panel.open('devtools-extension.panel');
    }
};
