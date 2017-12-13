<template>
	<el-card class="encrypt-container box-card">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-input
					type="textarea"
					:rows="6"
					placeholder="请输入内容"
					v-model="originText">
				</el-input>
			</el-col>
			<el-col :span="8">
				<div class="text-center">
					<span class="f14">转换方式: </span>
					<el-select v-model="type" size="mini" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="text-center">
					<el-button class="m-t-10" @click="encrypt" type="primary" size="mini" round>加密</el-button>
				</div>
				<div class="text-center">
					<el-button class="m-t-10" @click="decrypt" type="primary" size="mini" round>解密</el-button>
				</div>
			</el-col>
			<el-col :span="8">
				<el-input
					type="textarea"
					:rows="6"
					readonly=""
					v-model="result">
				</el-input>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">

.encrypt-container{
  .text-center{
		text-align: center;
	}
	.f14{
		font-size: 14px;
	}
	.m-t-10{
		margin-top: 10px;
	}
}

</style>