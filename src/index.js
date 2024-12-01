// 导入组件
import MyComponent from './components/MyComponent.vue';

// 导出组件
export { MyComponent };

// 默认导出
export default {
  install(app) {
    app.component('MyComponent', MyComponent);
  },
};