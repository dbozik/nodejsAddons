#include "functionExample.h"

double functionExample::sum() {
    int i;
    double pi = 3.1415926; 
    double e = 2.718;

    for (i = 0; i < 1000000000; i++) {
        pi += e;
    }

    return pi;
}

Napi::Number functionExample::SumWrapped(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    Napi::Number returnValue = Napi::Number::New(env, functionExample::sum());

    return returnValue;
}

Napi::Object functionExample::Init(Napi::Env env, Napi::Object exports) {
    exports.Set("sum", Napi::Function::New(env, functionExample::SumWrapped));

    return exports;
}