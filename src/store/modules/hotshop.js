import {RECEIVE_HOTSHOP} from '../mutation-types'
import {reqhotshopData} from '../../api'

const state = {
  hotdata:{}
}

const mutations = {
  [RECEIVE_HOTSHOP] (state, hotdata) {
    state.hotdata = hotdata
  }
}

const actions = {

  async getHotdata ({commit}) {
    const result = await reqhotshopData()
    //console.log(result)
    if(result.code==='200'){
      console.log(result)
      commit(RECEIVE_HOTSHOP,result.data)
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
