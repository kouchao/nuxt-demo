import Vue from 'vue'
import {Pagination} from 'element-ui'

export default ()=>{
  Vue.prototype.$ELEMENT = { size: 'small' };
  Vue.use(Pagination);
}