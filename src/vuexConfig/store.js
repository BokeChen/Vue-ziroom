import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    sidebarMenuList: [{ "id": 1, 'first_nav': "个人信息", "second_nav": [{ "id": 11, "nav": "个人信息", "icon": 'el-icon-info' }, { "id": 12, "nav": "修改密码", "icon": 'el-icon-menu' }] }], //左侧菜单栏显示内容
    loginActive : 1,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})