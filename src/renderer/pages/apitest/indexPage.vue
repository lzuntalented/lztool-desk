<template>
	<el-card class="apitest-container box-card">
		<div  class="url-area">
			<el-input placeholder="请输入请求地址" v-model="url" class="input-with-select" size="mini">
				<el-select class="method" slot="prepend" v-model="method" placeholder="请选择" size="mini">
						<el-option
							v-for="item in reqestMethods"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				<el-button slot="append" type="primary">
					发起请求
				</el-button>
			</el-input>
		</div>
		<div>
			<el-table
				:data="requestParamsTable"
				:span-method="arraySpanMethod"
				size="mini"
				stripe
				border
				>
				<el-button slot="empty" type="primary" size="mini">
					添加
				</el-button>
				<el-table-column
					prop="key"
					label="Reqest参数名称"
					>
					<template slot-scope="scope">
						<el-button
							v-if="scope.$index === scope.store.states.data.length - 1"
							size="mini">添加</el-button>
							<div
								class="text-center"
								v-if="scope.$index !== scope.store.states.data.length - 1"
							>{{scope.row.key}}</div>
					</template>
				</el-table-column>
				<el-table-column
					prop="value"
					label="Reqest参数值"
					>
				</el-table-column>
				<el-table-column
					v-if="requestParamsTable.length > 0"
					prop="value"
					label="操作"
					>
				</el-table-column>
			</el-table>
		</div>
		<div>
			<el-table
				:data="requestHeaderTable"
				size="mini"
				stripe
				border
				>
				<el-button slot="empty" type="primary" size="mini">
					添加
				</el-button>
				<el-table-column
					prop="key"
					label="Header名称"
					>
				</el-table-column>
				<el-table-column
					prop="value"
					label="Header值"
					>
				</el-table-column>
			</el-table>
		</div>
		<el-row>
			<el-col>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
  import ApiTest from './index'
  export default ApiTest
</script>

<style lang="scss">
.apitest-container{
	.url-area{
		.method {
			width: 80px;
		}
		.url {
		}
	}
}

</style>