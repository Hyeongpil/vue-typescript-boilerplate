/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPMethod } from "@/apis/client/APIClient"
// import { IApiResponse } from "@/repositories/network/APIResponse"

export type APIRequest<R> = {
  response: R
  path: string
  method: HTTPMethod
  params?: any
  baseURL?: string
  type?: string
  parse?: (data: any) => R
}

// export type APIRequest<R extends IApiResponse> = {
//   response: R
//   path: string
//   method: HTTPMethod
//   params?: any
//   baseURL?: string
//   parse?: (data: any) => R
// }
