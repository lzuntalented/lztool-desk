<template>
	<div class="play-container">
		<div class="content">
			<el-row class="m-t-10">
				<el-col :span="24" class="control-container">
					<i @click="paly" class="iconfont icon-bofang cursor-pointer play-icon" v-if="!playTag"></i>
					<i @click="pause" class="iconfont icon-suspend_icon cursor-pointer play-icon" v-if="playTag"></i>
					<el-slider @change="changeProgress" v-model="progress"></el-slider>
					<div class="time-change">
						{{currentTime}} / {{allTime}}
					</div>
					<div class="volume-icon">
						<i @click="showVolume" class="iconfont icon-yinliang cursor-pointer">
						</i>
						<el-slider
							@change="changeVolume"
							v-if="showVolumeTag"
							class="slide"
							v-model="volume"
							vertical
							height="100px">
							</el-slider>
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
	z-index: 10;
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
	.control-container {
		padding: 0px 50px;
		padding-right: 120px;
		position: relative;
	}
	.cursor-pointer{
		cursor: pointer
	}
	.play-icon {
		font-size: 30px;
		position: absolute;
		left: 0px;
		top: 2px;
		color: white;
	}
	.time-change{
		font-size: 12px;
		color: #a1a1a1;
		position: absolute;
		right: 40px;
		top: 13px;
	}
	.volume-icon {
		font-size: 20px;
		position: absolute;
		right: 10px;
		top: 6px;
		color: white;
		.slide {
			position: absolute;
			right: -10px;
			bottom: 30px;
		}
	}
}

</style>