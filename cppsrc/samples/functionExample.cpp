#include "functionExample.h"

std::string functionExample::hello() {
    return "hello world";
}

Napi::String functionExample::HelloWrapped(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    Napi::String returnValue = Napi::String::New(env, functionExample::hello());

    return returnValue;
}

Napi::Object functionExample::Init(Napi::Env env, Napi::Object exports) {
    exports.Set("hello", Napi::Function::New(env, functionExample::HelloWrapped));

    return exports;
}