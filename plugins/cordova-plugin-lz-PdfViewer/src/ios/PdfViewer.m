//
//  PdfViewer.m
//
//  Created by Jason Marckel on 14-Feb-2012.
//  Reused and updated by Kishan Rathod 31-March-2017.
//

#import "PdfViewer.h"
#import <Cordova/CDV.h>

@implementation PdfViewer

-(void)showPdf:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    
    @try {
        NSString *path = (NSString*) [command.arguments objectAtIndex:0];
		NSString *title = nil;
		BOOL isAllowToShare = FALSE;

        NSLog(@"%@", path);
        
        
        if (command.arguments.count > 1)
        {
			title = (NSString*) [command.arguments objectAtIndex:1];
            isAllowToShare = [(id)[command.arguments objectAtIndex:2] boolValue];
            NSLog(isAllowToShare ? @"Yes" : @"No");
        }
        
        
        if (path != nil && [path length] > 0) {
            
            //Determine cache file path
            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
            NSString *filePath = [NSMutableString stringWithFormat:@"%@/%@", [paths objectAtIndex:0], path];
            NSString *phrase = nil;
            
            ReaderDocument *document = [ReaderDocument withDocumentFilePath:filePath password:phrase];
            
            if (document != nil) // Must have a valid ReaderDocument object in order to proceed with things
            {
                document.canEmail = isAllowToShare;
                document.canPrint = isAllowToShare;
                document.canExport = isAllowToShare;
				document.title = title;
                
                ReaderViewController *pdfViewer;
                
                pdfViewer = [[ ReaderViewController alloc ] initWithReaderDocument:document ];
                pdfViewer.delegate = self;
                
                // present in a modal view controller
                
                pdfViewer.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
                pdfViewer.modalPresentationStyle = UIModalPresentationFullScreen;
                
                CDVViewController* cont = (CDVViewController*)[ super viewController ];
                
                [cont presentModalViewController:pdfViewer animated:YES];
            }
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@""];

            //pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            //javaScript = [pluginResult toSuccessCallbackString:command.callbackId];
            
        } else {
			pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_NO_RESULT messageAsString:@""];

            //pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            //javaScript = [pluginResult toErrorCallbackString:command.callbackId];
        }
    }
    @catch (NSException *exception) {
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[exception reason]];

        //pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:[exception reason]];
        //javaScript = [pluginResult toErrorCallbackString:command.callbackId];
    }
	@finally{
		[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
	}
    
}

- (void)dismissReaderViewController:(ReaderViewController *)viewController
{        
    CDVViewController* cont = (CDVViewController*)[ super viewController ];
	[cont dismissModalViewControllerAnimated:YES]; 
}

@end
