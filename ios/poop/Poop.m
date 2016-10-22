//
//  Poop.m
//  poop
//
//  Created by Neil Sarkar on 22/10/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

//#import <Foundation/Foundation.h>

#import "Poop.h"

@implementation Poop


RCT_EXPORT_METHOD(triggerError:(NSString *)foo
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *underlyingError = [NSError errorWithDomain:@"underlyingDomain" code:420 userInfo:nil];
  NSError *err = [NSError errorWithDomain:@"domain" code:69 userInfo:@{@"NSUnderlyingError": underlyingError}];
  
  reject(@"foo", @"bar", err);
}

RCT_EXPORT_MODULE()

@end
