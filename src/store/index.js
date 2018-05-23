import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
	questions: [
		{
			title: 'how is santa?',
			body: 'he\'s doing well!'
		},
		{
			title: 'why is the blue sky',
			body: 'clackety clack!'
		},
		{
			title: 'what is a lagrange multiplier?',
			body: 'shut up'
		}
	]
}

const getters = {
  questions: state => state.questions
}

const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

const mutations = {
  // setProducts (state, products) {
  //   state.all = products
  // },

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }

  setQuestions (state, payload) {
  	state.questions = payload
  }
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})