import {reqhomeData} from '../../api'
import {
  RECEIVE_NAVLIST,
  RECEIVE_FLASHSALE,
  RECEIVE_POPULAR,
  RECEIVE_NEWITEMLIST
} from '../mutation-types'

const state = {
  navList: [],
  flashSale: [],
  popularlist: [],
  newItemList: []
}
const mutations = {
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList
  },
  [RECEIVE_FLASHSALE] (state, flashSale) {
    state.flashSale = flashSale
  },
  [RECEIVE_POPULAR] (state, popularlist) {
    state.popularlist = popularlist
  },
  [RECEIVE_NEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList
  }
}

const actions = {
  async gethomeData ({commit}) {
    const result = await reqhomeData()
    if (result.code === 0) {
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList)
      commit(RECEIVE_FLASHSALE, result.data.flashSaleModule)
      commit(RECEIVE_POPULAR, result.data.popularItemList)
      commit(RECEIVE_NEWITEMLIST,result.data.newItemList)
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
