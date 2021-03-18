import { APIClient } from "./client/APIClient"
import Characters from "../entities/characters"
import { CharacterApi } from "./api/CharacterApi"

export default class CharacterRepository {
  async fetchCharacter(): Promise<Characters> {
    return await APIClient.shared.request(new CharacterApi.FetchCharacter())
  }
}
