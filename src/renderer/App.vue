<template>
  <div id="app">
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">
        <a href="#/json">json转换</a>
      </el-menu-item>
      <el-menu-item index="2-2">
        <a href="#/code">编码转换</a>
      </el-menu-item>
      <el-menu-item index="2-3">
        <a href="#/time">时间转换</a>
      </el-menu-item>
      <el-menu-item index="2-4">
        <a href="#/qrcode">二维码转换</a>
      </el-menu-item>
    </el-submenu>
  </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'lz-collect'
  }
</script>

<style>
  /* CSS */
</style>
