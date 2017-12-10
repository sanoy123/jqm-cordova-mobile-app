cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
        "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
        "pluginId": "cordova-plugin-document-viewer",
        "clobbers": [
            "cordova.plugins.SitewaertsDocumentViewer",
            "SitewaertsDocumentViewer"
        ]
    },
    {
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewerProxy",
        "file": "plugins/cordova-plugin-document-viewer/src/windows/sitewaertsdocumentviewerProxy_native.js",
        "pluginId": "cordova-plugin-document-viewer",
        "merges": [
            ""
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
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "file": "plugins/cordova-plugin-statusbar/src/windows/StatusBarProxy.js",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "file": "plugins/cordova-plugin-inappbrowser/src/windows/InAppBrowserProxy.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-document-viewer": "0.9.7",
    "cordova-plugin-lz-PdfViewer": "1.0.0",
    "cordova-plugin-statusbar": "2.3.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-inappbrowser": "1.7.2"
};
// BOTTOM OF METADATA
});