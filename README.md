# react-native-error-repro

Minimal reproduction case of RCTJSONStringify error from sending underlyingError over websocket

Running this code with the debugger on causes a json error over the debugging websocket:

```objective-c
RCT_EXPORT_METHOD(triggerError:(NSString *)foo
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSError *underlyingError = [NSError errorWithDomain:@"underlyingDomain" code:420 userInfo:nil];
  NSError *err = [NSError errorWithDomain:@"domain" code:69 userInfo:@{@"NSUnderlyingError": underlyingError}];
  
  reject(@"foo", @"bar", err);
}
```
<img src="https://cldup.com/8jLLb3j8ZX.png" />
