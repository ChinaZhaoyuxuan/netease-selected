import {reqcategoryData} from '../../api'
import {RECEIVE_CATEGORYLIST} from '../mutation-types'

const state = {
  categoryList: []
}

const mutations = {
  [RECEIVE_CATEGORYLIST] (state, categoryList) {
    state.categoryList = categoryList;
  }
}

const actions = {
  async getCategoryList ({commit}) {
    const result = await reqcategoryData()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYLIST, result.data.categoryL1List);
    } else {
      console.log('获取数据失败');
    }
  }
};

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
