<template>
  <div class="time-container">
		<div class="text-center margin-t-40">
			现在的Unix时间戳是：
			<el-input
				placeholder="请输入内容"
				size="mini"
				v-model="nowTime">
			</el-input>
			<el-button size="mini" round @click="refresh">刷新</el-button>
			<el-button size="mini" round @click="start">开始</el-button>
			<el-button size="mini" round @click="pause">暂停</el-button>
		</div>
		<div class="text-center margin-t-40">
			Unix时间戳
			<el-select v-model="value" class="select-container" size="mini" placeholder="请选择">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
			<el-input
				placeholder="请输入内容"
				size="mini"
				v-model="orginBJTime">
			</el-input>
			<el-button size="mini" round @click="changeToText">转换成北京时间</el-button>
			<el-input
				size="mini"
				readonly
				v-model="bjTime">
			</el-input>
		</div>
		<div class="text-center margin-t-40 list-time">
			北京时间:
			<el-input
				size="mini"
				v-model="mY">
			</el-input>年
			<el-input
				size="mini"
				v-model="mM">
			</el-input>月
			<el-input
				size="mini"
				v-model="mD">
			</el-input>日
			<el-input
				size="mini"
				v-model="mH">
			</el-input>时
			<el-input
				size="mini"
				v-model="mS">
			</el-input>分
			<el-input
				size="mini"
				v-model="mSS">
			</el-input>秒
			<el-button size="mini" round @click="changeToTime">转换成Unix时间戳</el-button>
			<el-input
				size="mini"
				readonly
				class="lang-input"
				v-model="timestamp">
			</el-input>
		</div>
  </div>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">
.time-container{
	.select-container{
		input{
			width: 80px;
		}
	}
  .el-input{
		width: auto;
	}
	.list-time{
		input{
			width: 50px;
			padding: 0px 5px;
		}
		.lang-input{
			input {
				width: 150px;
			}
		}
	}
}

</style>