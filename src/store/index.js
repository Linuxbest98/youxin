import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		data: {},
	},
	mutations: {
		getdata(state, res) {
			state.data = res
		}
	},
	actions: {
		getdata(context) {
// 			let q = 'good';
// 			let froml = 'en';
// 			let to = 'zh-CHS';
// 			let appKey = '2e28d6aa8571376d';
// 			let salt = '5a073a0a-c280-4947-ae8f-602e25604219';
// 			let sign = '5a073a0a-c280-4947-ae8f-602e25604219';
// 			let signType = 'v2';
			let curtime= Math.round(new Date().getTime()/1000);
			axios('https://openapi.youdao.com/api/?q=good/from=en/to=CHS/appkey=2e28d6aa8571376d/salt=5a073a0a-c280-4947-ae8f-602e25604219/sign=c280/signType=v2/curtime='+curtime).then((res) => {
				context.commit('getdata', res)
			})
		}
	}
})


export default store
