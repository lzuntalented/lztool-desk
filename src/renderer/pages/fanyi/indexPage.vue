<template>
	<el-card class="fanyi-container box-card">
		<div>
			<el-input
					type="textarea"
					:rows="6"
					placeholder="请输入内容"
					v-model="originText">
				</el-input>
		</div>
		<div>
			<el-button class="m-t-10" @click="decrypt" type="primary" size="mini" round>翻译</el-button>
		</div>
		<div class="result">{{result}}</div>
	</el-card>
</template>

<script>
  import fanyi from './index'
  export default fanyi
</script>

<style lang="scss">

.fanyi-container{
  .text-center{
		text-align: center;
	}
	.f14{
		font-size: 14px;
	}
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