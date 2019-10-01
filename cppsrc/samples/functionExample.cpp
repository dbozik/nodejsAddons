#include "functionExample.h"
#include "thread"

void sumPartial(double& result) {
    int i;
    double pi = 3.1415926; 
    double e = 2.718;

    result = pi;
    for (i = 0; i < 1000000000; i++) {
        result += e;
    }
}

double functionExample::sum() {
    double result1;
    std::thread thread1(sumPartial, std::ref(result1));

    double result2;
    std::thread thread2(sumPartial, std::ref(result2));
    
    thread1.join();
    thread2.join();

    return result1 + result2;
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