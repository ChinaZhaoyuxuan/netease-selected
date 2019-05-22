import {RECEIVE_SEARCHRESULT} from '../mutation-types'
import {reqSearchResult} from '../../api'

const state = {
  searchdata: []
}

const mutations = {
  [RECEIVE_SEARCHRESULT] (state, searchdata) {
    state.searchdata = searchdata
  }
}

const actions = {
  async getSearchdata ({commit},keywordPrefix) {
    const result = await reqSearchResult(keywordPrefix)
    if(result.code==='200'){
      commit(RECEIVE_SEARCHRESULT,result.data)
      console.log(result.data)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
