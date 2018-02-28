<template>
	<el-card class="apitest-container box-card">
		<div  class="url-area m-b-10">
			<el-input placeholder="请输入请求地址" v-model="url" class="input-with-select" size="mini">
				<el-select class="method" slot="prepend" v-model="method" placeholder="请选择" size="mini">
						<el-option
							v-for="item in reqestMethods"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				<el-button @click="sendRequest" slot="append" type="primary">
					发起请求
				</el-button>
			</el-input>
		</div>
		<div class="m-b-10">
			<el-table
				:data="requestParamsTable"
				:span-method="arraySpanMethod"
				size="mini"
				stripe
				border
				>
				<el-table-column
					prop="key"
					label="Reqest参数名称"
					>
					<template slot-scope="scope">
						<el-button
							class="m-v display-block"
							@click="addParamRow(requestParamsTable)"
							type="primary" 
							v-if="scope.$index === scope.store.states.data.length - 1"
							size="mini">添加</el-button>
							<el-input
								size="mini"
								v-model="scope.row.key"
								v-if="scope.$index !== scope.store.states.data.length - 1"
								>
							</el-input>
					</template>
				</el-table-column>
				<el-table-column
					prop="value"
					label="Reqest参数值"
					>
					<template slot-scope="scope">
						<el-input
							size="mini"
							v-model="scope.row.value"
							>
						</el-input>
					</template>
				</el-table-column>
				<el-table-column
					v-if="requestParamsTable.length > 0"
					prop="value"
					label="操作"
					>
					<template slot-scope="scope">
						<el-button @click="delTableRow(requestParamsTable, scope.$index)" slot="empty" type="danger" size="mini">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="m-b-10">
			<el-table
				:data="requestHeaderTable"
				:span-method="arrayHeaderSpanMethod"
				size="mini"
				stripe
				border
				>
				<el-table-column
					prop="key"
					label="Header名称"
					>
					<template slot-scope="scope">
						<el-button
							class="m-v display-block"
							@click="addParamRow(requestHeaderTable)"
							type="primary" 
							v-if="scope.$index === scope.store.states.data.length - 1"
							size="mini">添加</el-button>
							<el-input
								size="mini"
								v-model="scope.row.key"
								v-if="scope.$index !== scope.store.states.data.length - 1"
								>
							</el-input>
					</template>
				</el-table-column>
				<el-table-column
					prop="value"
					label="Header值"
					>
					<template slot-scope="scope">
						<el-input
							size="mini"
							v-model="scope.row.value"
							>
						</el-input>
					</template>
				</el-table-column>
				<el-table-column
					v-if="requestHeaderTable.length > 0"
					prop="value"
					label="操作"
					>
					<template slot-scope="scope">
						<el-button @click="delTableRow(requestHeaderTable, scope.$index)" slot="empty" type="danger" size="mini">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="m-b-10">
			<el-table
				:data="responseTableColumns"
				size="mini"
				stripe
				border
				>
				<el-table-column
					prop="key"
					label="Response Header"
					>
					<template slot-scope="scope">
						<div v-html="scope.row.key"></div>
					</template>							
				</el-table-column>
				<el-table-column
					prop="value"
					label="Response Body"
					>
					<template slot-scope="scope">
						<el-input
							type="textarea"
							:rows="8"
							size="mini"
							v-model="scope.row.value"
							>
						</el-input>
					</template>
				</el-table-column>
			</el-table>
		</div>
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
	.res-scroll {
		height: 300px;
		overflow: scroll;
	}
	p{
		margin: 0 0;
	}
}

</style>