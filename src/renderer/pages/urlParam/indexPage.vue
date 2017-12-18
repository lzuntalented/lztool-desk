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
			<el-button class="m-t-10" @click="parse" type="primary" size="mini" round>url参数解析</el-button>
		</div>
		<div class="result">
			<div v-for="(item, index) in result" :key="index">
				{{item}}
			</div>
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