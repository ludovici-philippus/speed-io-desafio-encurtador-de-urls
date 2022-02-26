import { createStore } from 'vuex'

export const state = () => ({
  gerou: false
})

export const mutations = {
  gerar(state) {
    state.gerou = true;
  }
}

export const getters = {
    getGerou(state){
      return state.gerou;
    }
}


