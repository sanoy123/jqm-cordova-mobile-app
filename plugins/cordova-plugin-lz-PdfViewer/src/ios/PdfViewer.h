//
//  PdfViewer.m
//
//  Created by Jason Marckel on 14-Feb-2012.
//  Reused and updated by Kishan Rathod 31-March-2017.
//

#import <Foundation/Foundation.h>

#import <Cordova/CDV.h>

#import "ReaderViewController.h"

@interface PdfViewer : CDVPlugin <ReaderViewControllerDelegate>

//Instance Method
- (void) showPdf:(CDVInvokedUrlCommand*)command;

@end
