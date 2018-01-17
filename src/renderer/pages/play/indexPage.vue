<template>
	<div class="play-container">
		<div class="content">
			<el-row class="m-t-10">
				<el-col :span="16">
					<el-slider @change="changeProgress" v-model="progress"></el-slider>
				</el-col>
				<el-col :span="8">
					<div class="but-container" >
						<el-button type="primary" @click="search" size="mini" round>播放</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		
	</div>
</template>

<script>
  import Play from './index'
  export default Play
</script>

<style lang="scss">
.play-container{
	position: fixed;
	bottom: 0px;
	left: 0px;
	width: 100%;
	background: rgba($color: #000000, $alpha: 0.8);
	.content {
		padding: 10px 20px;
		.but-container{
			padding: 0px 30px;
		}
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