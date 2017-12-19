<template>
  <div class="app-container" id="app">
    <el-menu
    class="el-menu-container"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <a v-for="(item, index) in router" :key="index" :href="item.href" >
        <el-menu-item :index="index + ''">{{item.label}}</el-menu-item>
      </a>
    </el-submenu>
  </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'lz-collect',
    data() {
      const arr = [
        ['json', 'json转换'],
        ['code', '编码转换'],
        ['time', '时间转换'],
        ['qrcode', '二维码转换'],
        ['encrypt', '加解密'],
        ['xmorse', '莫斯密码'],
        ['dateChange', '公农历转换'],
        ['urlParam', 'url参数转换'],
        ['urlEncode', 'url编解码']
      ];
      const router = [];
      for(let len = arr.length, i = len - 1; i >= 0; --i) {
        router.push({
          label: arr[i][1],
          href: '#/' + arr[i][0]
        })
      }
      return {
        router
      }
    }
  }
</script>

<style lang="scss">
  /* CSS */
  .app-container{
    .el-menu-container{
      a{
        text-decoration: none;
      }
    }
    
  }
</style>
