#include <napi.h>

namespace functionExample {
  double sum();
  Napi::Number SumWrapped(const Napi::CallbackInfo& info);
  Napi::Object Init(Napi::Env env, Napi::Object exports);
}
