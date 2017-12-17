<template>
	<el-card class="data-change-container box-card">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-select v-model="year" size="mini" placeholder="请选择" @change="yearChange">
					<el-option
						v-for="item in yearArr"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="8">
				<el-select v-model="month" size="mini" placeholder="请选择" @change="monthChange">
					<el-option
						v-for="item in monthArr"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="8">
				<el-select v-model="day" size="mini" placeholder="请选择">
					<el-option
						v-for="item in dayArr"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-col>
		</el-row>
		<div>
			<el-button class="m-t-10" @click="gTOn" type="primary" size="mini" round>公历转农历</el-button>
			<el-button class="m-t-10" @click="nTOg" type="primary" size="mini" round>农历转公历</el-button>
		</div>
		<div class="result">{{result}}</div>
	</el-card>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style lang="scss">

.data-change-container{
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