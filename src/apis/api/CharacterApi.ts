import Characters from "@/entities/characters"
import { AxiosResponse } from "axios"
import { APIRequest } from "@/apis/client/APIRequest"
import { HTTPMethod } from "@/apis/client/APIClient"

export namespace CharacterApi {
  export class FetchCharacter implements APIRequest<Characters> {
    response: Characters
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = ``
    }
  }
}
