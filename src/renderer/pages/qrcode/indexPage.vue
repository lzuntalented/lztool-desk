<template>
	<el-card class="qrcode-container box-card">
		<el-tabs v-model="activeName">
			<el-tab-pane label="二维码转文本" name="first">
				<el-row :gutter="20">
					<el-col :span="12">
						<label for="file" class="select-file">选择文件</label>
						<input class="display-none" id="file" type="file" @change="fileChange">
					</el-col>
					<el-col :span="12">
						{{fileContent}}
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="文本转二维码" name="second">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-input
							type="textarea"
							:rows="6"
							placeholder="请输入内容"
							v-model="originText">
						</el-input>
					</el-col>
					<el-col :span="12">
						<img :src=qrcodeText />
					</el-col>
				</el-row>
				<el-button class="m-t-10" @click="textToQrcode" type="primary" size="mini" round>生成二维码</el-button>
			</el-tab-pane>
		</el-tabs>
	</el-card>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">

.qrcode-container{
  .m-t-10 {
	margin-top: 10px;
  }
  .select-file{
	color: #fff;
	background-color: #409EFF;
	border-color: #409EFF;
	padding: 7px 15px;
	border-radius: 7px;
	cursor: pointer;
	font-size: 12px;
	display: inline-block;
  }
  .display-none{
	display: none;
  }
}

</style>