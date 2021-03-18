import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators"
import store from "@/store/index"

export interface ICharacters {
  name: string
  aliases: string[]
  title: string
  books: string[]
  tvSeries: string[]
}

@Module({ dynamic: true, store, name: "characters" })
class CharacterStore extends VuexModule implements ICharacters {
  public name = ""
  public aliases = []
  public title = ""
  public books = []
  public tvSeries = []

  @Action
  public async fetchCharacter() {
    // api 통신 후 set하기
    this.SET_NAME("")
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }
}
