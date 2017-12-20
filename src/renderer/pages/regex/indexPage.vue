<template>
	<el-card class="regex-container box-card">
		<div class="m-b-10">
			<el-button size="mini" type="primary" round v-for="(item, index) in buts" :key="index" @click="setRegex(item.value)">
				{{item.label}}
			</el-button>
		</div>
		<div>
			<el-input
				type="textarea"
				:rows="5"
				placeholder="在此输入待匹配文本"
				v-model="originText">
			</el-input>
		</div>
		<el-row class="demo-autocomplete m-t-10">
			<el-col :span="12">
				<el-input placeholder="请输入内容" v-model="regex" size="mini">
					<template slot="prepend">正则表达式</template>
				</el-input>
			</el-col>
			<el-col :span="12">
				<el-checkbox-group v-model="checkList" class="p-lr-10">
					<el-checkbox label="1" checked border size="mini">全局搜索</el-checkbox>
					<el-checkbox label="2" border size="mini">忽略大小写</el-checkbox>
				</el-checkbox-group>
			</el-col>
		</el-row>
		<div>
			<el-button class="m-t-10" @click="parse" type="primary" size="mini" round>测试匹配</el-button>
		</div>
		<div class="result">
			<div>{{resultLength}}</div>
			<div v-for="(item, index) in result" :key="index">
				{{item}}
			</div>
		</div>
	</el-card>
</template>

<script>
  import Regex from './index'
  export default Regex
</script>

<style lang="scss">
.regex-container{
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
	.p-lr-10{
		padding: 0px 10px;
	}
	.m-b-10{
		margin-bottom: 10px;
	}
}

</style>