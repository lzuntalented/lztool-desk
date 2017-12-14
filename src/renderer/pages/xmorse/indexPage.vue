<template>
	<el-card class="xmorse-container box-card">
		<div>
			<el-input
					type="textarea"
					:rows="6"
					placeholder="请输入内容"
					v-model="originText">
				</el-input>
		</div>
		<div>
			<el-button class="m-t-10" @click="encrypt" type="primary" size="mini" round>加密摩斯密码</el-button>
			<el-button class="m-t-10" @click="decrypt" type="primary" size="mini" round>解密摩斯密码</el-button>
		</div>
		<div class="result">{{result}}</div>
	</el-card>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">

.xmorse-container{
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