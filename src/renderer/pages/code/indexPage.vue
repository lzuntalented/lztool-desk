<template>
	<el-card class="box-card">
  </el-alert>
		<div slot="header" class="clearfix">
			<span>编码转换</span>
			<el-button style="float: right;" type="primary" size="mini" round @click="handleClick">转换</el-button>
		</div>
		<el-tabs v-model="tabIndex">
			<el-tab-pane label="ASCII 转 Unicode" name="0"></el-tab-pane>
			<el-tab-pane label="Unicode 转 ASCII" name="1"></el-tab-pane>
			<el-tab-pane label="中文 转 Unicode" name="2"></el-tab-pane>
			<el-tab-pane label="Unicode 转 中文" name="3"></el-tab-pane>
		</el-tabs>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-input
					type="textarea"
					:autosize="{ minRows: 6, maxRows: 6}"
					placeholder="请输入内容"
					v-model="originText">
				</el-input>
			</el-col>
			<el-col :span="12">
				<el-input
					type="textarea"
					:autosize="{ minRows: 6, maxRows: 6}"
					placeholder="请输入内容"
					v-model="changeText">
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

.time-container{
  
}

</style>