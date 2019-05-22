import {reqRecommendData} from '../../api'

import {RECEIVE_RECOMMENDDATA} from '../mutation-types'

const state = {
  recommdata: []
}

const mutations = {
  [RECEIVE_RECOMMENDDATA] (state, recommdata) {
    state.recommdata = recommdata
  }
}

const actions = {

  async getRecommendDate ({commit}) {
    const result = await reqRecommendData()
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDDATA, result.data)
    }
  }
}

const getters = {}
export default {
  actions,
  mutations,
  state,
  getters
}
