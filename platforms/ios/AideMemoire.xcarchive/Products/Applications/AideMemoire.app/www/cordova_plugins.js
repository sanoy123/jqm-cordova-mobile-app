cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-lz-PdfViewer.PdfViewer",
    "file": "plugins/cordova-plugin-lz-PdfViewer/www/PdfViewer.js",
    "pluginId": "cordova-plugin-lz-PdfViewer",
    "clobbers": [
      "PdfViewer"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-lz-PdfViewer": "1.0.0",
  "cordova-plugin-statusbar": "2.3.0",
  "cordova-plugin-inappbrowser": "1.7.2"
};
// BOTTOM OF METADATA
});