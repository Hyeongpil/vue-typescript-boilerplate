/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IApiResponse } from "./APIResponse"
import { APIRequest } from "./APIRequest"
import { IApiError } from "./APIError"

export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}

export class APIClient {
  static shared = new APIClient()

  // URL 설정
  baseDomain = "https://scare.ldcc.co.kr/api"
  baseURL = `${this.baseDomain}`

  // Timeout 설정
  timeout: number = 15 * 1000

  request<T extends IApiResponse>(request: APIRequest<T>): Promise<T> {
    const isRead = request.method === HTTPMethod.GET

    console.log(`=======================================`)
    console.log(`🎉 API 요청 : ${request.path}`)
    console.log("🎉 params :", request.params)
    return new Promise<T>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: request.params,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
        .then((result) => {
          console.log(request)
          const response = request.parse
            ? this.parse<T>(request.parse(result))
            : this.parse<T>(result)

          // 디버깅용
          console.log("🎉 API 응답 :", response)
          console.log(`=======================================`)
          if (result.data.code === 1000) resolve(response)
          reject(result.data)
        })
        .catch((err) => {
          const apiError = this.normalizeError(err)
          reject(apiError)
        })
    })
  }

  // Default parser
  private parse<T extends IApiResponse>(data: any): any {
    console.log(data)
    return data.data
  }

  // Convert axios error into APIError
  private normalizeError(error: any): IApiError {
    return {
      code: error.response && error.response.status,
      message: error.message,
      raw: error,
    }
  }
}
