import Vue from 'vue'
import user from './user.vue'
// console.log('this is logs')
// Vue.Componment('top', top)

let v = new Vue(user);
v.$mount('component')
// Component({
//
//   // properties: {
//   //   paramA: Number,
//   //   paramB: String,
//   // },
//
//   methods: {
//     onLoad: function() {
//       // this.data.paramA // 页面参数 paramA 的值
//       // this.data.paramB // 页面参数 paramB 的值
//     }
//   }
//
// })
