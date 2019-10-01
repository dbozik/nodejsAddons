#include <napi.h>
#include "Samples/functionexample.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return functionExample::Init(env, exports);
}

NODE_API_MODULE(testaddon, InitAll)