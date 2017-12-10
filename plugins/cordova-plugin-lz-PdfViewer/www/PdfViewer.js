// cordova plugin

function PdfViewer() {
    
}

PdfViewer.prototype.showPdf = function(path, title, isAllowToShare) {
    cordova.exec(null, null, "PdfViewer", "showPdf", [path, title, isAllowToShare]);
};

cordova.addConstructor(function() 
{
   if(!window.plugins)
   {
      window.plugins = {};
   }
   window.plugins.PdfViewer = new PdfViewer();
   console.log("construct plugin PdfViewer");
});
