<template>
  <div class="app-container" id="app">
    <el-menu
    class="el-menu-container"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="2">
      <template slot="title">工具库</template>
      <a v-for="(item, index) in router" :key="index" :href="item.href" >
        <el-menu-item :index="index + ''">{{item.label}}</el-menu-item>
      </a>
    </el-submenu>
    <el-menu-item index="41"><a href="#/music">音乐台</a></el-menu-item>
    <el-menu-item index="42"><a href="#/markdown">Markdown</a></el-menu-item>
  </el-menu>
    <router-view></router-view>
    <lz-play></lz-play>
  </div>
</template>

<script>
  import Play from './pages/play/indexPage';
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
        ['urlEncode', 'url编解码'],
        ['regex', '正则表达式检测']
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
    },
    components: {
      'lz-play': Play
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
