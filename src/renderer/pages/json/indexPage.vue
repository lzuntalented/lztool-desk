<template>
  <div class="json-container">
    <div class="col-half">
      <div class="textarea-container">
        <textarea @input="dataChange" v-model="jsonOrigin" placeholder="在此输入json字符串..."></textarea>
      </div>
    </div>
    <div class="col-half">
      <div class="node-container" @click="nodeClick" v-html="rawHtml"></div>
    </div>
  </div>
</template>

<script>
  import Json from './index'
  export default Json
</script>

<style>
@import url(//at.alicdn.com/t/font_386007_mliceqia5p8yf1or.css);
</style>
<style lang="scss">

.json-container{
  .col-half{
    float: left;
    width: 50%;
    .textarea-container{
      padding: 10px;
      textarea{
        width: 100%;
        min-height: 520px;
        border: 0;
        border-right: solid 1px #E5EBEE;
        border-radius: 0;
        resize: none;
        outline: none;
        font-size: 12px;
        box-sizing: border-box;
      }
    }
    .node-container{
      padding: 10px;
      height: 100%;
    }
  }
}

ul,li{
  list-style: none;
  margin: 0 0;
  padding: 0 0;
}
.lz-node{
    color: #4A5560;
}
.lz-node ul{
  padding-left: 20px;
    color: #4A5560;
}
.lz-node .key {
    color: #92278f;
    font-weight: bold;
}
.lz-node .val_string {
    color: #3ab54a;
    font-weight: bold;
}
</style>