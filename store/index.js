import { createStore } from 'vuex'

export const state = () => ({
  gerou: false,
  titulo: "",
  link_novo: "",
  api_path: "http://localhost:5000/"
})

export const mutations = {
  gerar(state, params) {
    state.gerou = true;
    state.titulo = params[0];
    state.link_novo = params[1];
  },
}

export const getters = {
  getGerou(state) {
    return state.gerou;
  },
  getTitulo(state){
    return state.titulo;
  },
  getLinkNovo(state){
    return state.link_novo;
  },
  getApiPath(state){
    return state.api_path;
  }
}
