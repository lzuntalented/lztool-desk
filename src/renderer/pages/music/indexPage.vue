<template>
	<el-card class="music-container box-card">
		<el-input v-model="searchText" clearable placeholder="搜索歌曲" @change="change()"><el-button @click="search()" slot="append" icon="el-icon-search"></el-button></el-input>
		<el-row class="m-t-10">
			<el-col :span="16">
				<div class="p-r-10 f12">
				<el-card >
					<el-table
						:data="recommend"
						v-if="!showSearchResult"
						>
						<el-table-column
							prop="name"
							label="推荐歌曲"
							>
						</el-table-column>
						<el-table-column
							prop="songer"
							label=""
							width="150"
							>
						</el-table-column>
					</el-table>

					<el-table
						v-if="showSearchResult"
						:data="searchList"
						>
						<el-table-column
							prop="name"
							label="搜索结果"
							>
							<template slot-scope="scope">
								<i class="iconfont icon-bofang cursor-pointer" @click="play(scope.row)"></i>
								<span style="margin-left: 10px">{{ scope.row.name }}</span>
							</template>
						</el-table-column>
						<el-table-column
							prop="songer"
							label=""
							width="150"
							>
						</el-table-column>
					</el-table>
				</el-card>
				</div>
			</el-col>
			<el-col :span="8">
				<el-card>
				<el-table
				:data="playHistory"
				style="width: 100%">
				<el-table-column
					prop="name"
					label="最近播放"
					>
					<template slot-scope="scope">
						<i class="iconfont icon-bofang cursor-pointer" @click="play(scope.row)"></i>
						<span style="margin-left: 10px">{{ scope.row.name }}</span>
					</template>
				</el-table-column>
				</el-table>
				</el-card>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
  import Music from './index'
  export default Music
</script>

<style lang="scss">
.music-container{
	.cursor-pointer{
		cursor: pointer
	}
	.f12{
		font-size: 12px;
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
	.p-lr-10{
		padding: 0px 10px;
	}
	.m-b-10{
		margin-bottom: 10px;
	}
	.p-r-10{
		padding-right: 10px;
	}
}

</style>