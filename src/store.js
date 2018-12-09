import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)
let api = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    game: {},
    opponentCard: {},
    playerCard: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setOpponentCard(state, card) {
      state.opponentCard = card
    },
    setPlayerCard(state, card) {
      state.playerCard = card
    }
  },
  actions: {
    // create new game No Name, No card set
    startGame({ commit }) {
      api.post('')
        .then(res => {
          console.log('new Game:', res.data)
          commit('setGame', res.data)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
        .catch(err => console.log('Cannot create new game'))
    },
    getGame({ commit }, gameId) {
      api.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
          console.log('game: ', res.data.data)
        })
        .catch(err => console.log('Cannot get game, gameId: ', gameId))
    },
    attack({ commit, dispatch }, payload) {

      api.put(payload.gameId, payload)
        .then(res => {
          console.log(res.data.game)
          commit('setGame', res.data.game)
        })
        .catch(err => console.log('cannot play game'))
    },
    setOpponentCard({ commit, dispatch }, card) {
      commit('setOpponentCard', card)
    },
    setPlayerCard({ commit, dispatch }, card) {
      commit('setPlayerCard', card)
    }

  }
})
