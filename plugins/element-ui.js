import Vue from 'vue'
import {Pagination, Form, FormItem, Input, Button, MessageBox, Badge } from 'element-ui'

export default ()=>{
  // Vue.prototype.$ELEMENT = { size: 'small' };
  Vue.use(Pagination);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(Button);
  Vue.use(Badge);
  
  Vue.prototype.$alert = MessageBox.alert;
}