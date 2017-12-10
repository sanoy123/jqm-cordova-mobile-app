# PDF Viewer plugin for Cordova iOS #

Use this Cordova plugin to view and share PDF files. This plugin is based [vfr's](http://www.vfr.org/) open source iOS PDF viewer https://github.com/vfr/Reader. 

## Getting started

Once you're familiar with that process, you may install this plugin with the [Cordova CLI](https://cordova.apache.org/docs/en/6.x/guide/cli/index.html):

```
cordova plugin add cordova-plugin-lz-pdfviewer 
Or
cordova plugin add https://github.com/hirtenfelder/cordova-plugin-iospreferences.git
```

## Using the plugin

The plugin creates the object `window.plugins.PdfViewer` with one method `showPdf(filename, title, isAllowToShare)`. 
`filename` is the name of the PDF file, `title` is the title for the PDF file (only for iPad) and isAllowToShare is to make Print, Email and Export button visible and invisiable.


A full showpdf example could be:

    window.plugins.pdfviewer.showpdf('filename.pdf', 'Document Title', true);