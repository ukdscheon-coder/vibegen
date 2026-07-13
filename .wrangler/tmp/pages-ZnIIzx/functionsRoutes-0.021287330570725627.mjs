import { onRequestOptions as __api_generate_js_onRequestOptions } from "C:\\Users\\laser\\Desktop\\vibegen\\functions\\api\\generate.js"
import { onRequestPost as __api_generate_js_onRequestPost } from "C:\\Users\\laser\\Desktop\\vibegen\\functions\\api\\generate.js"

export const routes = [
    {
      routePath: "/api/generate",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_generate_js_onRequestOptions],
    },
  {
      routePath: "/api/generate",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_generate_js_onRequestPost],
    },
  ]