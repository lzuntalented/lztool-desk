<template>
	<el-card class="url-param-container box-card">
		<div>
			<el-input
				type="textarea"
				:rows="5"
				placeholder="请输入内容"
				v-model="originText">
			</el-input>
		</div>
		<div>
			<el-button class="m-t-10" @click="parseEncode" type="primary" size="mini" round>url编码(encodeURI)</el-button>
			<el-button class="m-t-10" @click="parseDecode" type="primary" size="mini" round>url解码(decodeURI)</el-button>
			<el-button class="m-t-10" @click="parseEncodeComponent" type="primary" size="mini" round>url编码(encodeURIComponent)</el-button>
			<el-button class="m-t-10" @click="parseDecodeComponent" type="primary" size="mini" round>url解码(decodeURIComponent)</el-button>
		</div>
		<div class="result">
			{{result}}
		</div>
	</el-card>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">

.url-param-container{
	.m-t-10{
		margin-top: 10px;
	}
	.result{
		color: green;
		background: #daeee4;
   		border: 1px #b6dfca solid;
	    padding: 10px;
		margin-top: 10px;
		border-radius: 3px;
	}
}

</style>