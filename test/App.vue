<template>
    <div>
      <h1>CBCORE 前端 Vue 库测试</h1>
      <MyComponent />
    </div>
  </template>
  
  <script>
  import { MyComponent } from '../src/index';
  
  export default {
    components: {
      MyComponent
    }
  };
  </script>