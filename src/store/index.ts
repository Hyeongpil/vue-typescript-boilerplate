import Vue from "vue"
import Vuex from "vuex"
import { ICharacters } from "./modules/characters"

Vue.use(Vuex)

export interface IRootState {
  characters: ICharacters
}

export default new Vuex.Store<IRootState>({
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== "production",
})
