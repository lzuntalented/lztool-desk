<template>
	<div class="play-container width-100">
		<div v-bind:class="detailClass">
			<div class="over-flow-hidden width-100">
				<i class="iconfont icon-xiala hide-icon" @click="hideDetail" />
			</div>
			<el-row class="m-t-10">
				<el-col :span="24" class="control-container">
					<i @click="paly" class="iconfont icon-bofang cursor-pointer play-icon" v-if="!playTag"></i>
					<i @click="pause" class="iconfont icon-suspend_icon cursor-pointer pause-icon" v-if="playTag"></i>
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
		<div v-bind:class="showProgress">
			<div class="expand">
				<i @click="showDetail" class="iconfont icon-zhankai" />
			</div>
			<div class="i-con">
				<i @click="paly" class="iconfont icon-bofang cursor-pointer play-icon" v-if="!playTag"></i>
				<i @click="pause" class="iconfont icon-suspend_icon cursor-pointer pause-icon" v-if="playTag"></i>
			</div>
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
	background: #373c46;
	z-index: 10;
	.over-flow-hidden{
		overflow: hidden;
	}
	.hide-icon{
		position: absolute;
		right: 30px;
		top: -20px;
		font-size: 25px;
		color: #cccdd0;
		background: #373c46;
		cursor: pointer;
	}
	.display-none {
		display: none;
	}
	&.width-100{
		width: 100%;
	}
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
	.pause-icon {
		font-size: 30px;
		position: absolute;
		left: 0px;
		top: 4px;
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
	.circle-content {
		min-width: 32px;
		min-height: 32px;
		position: fixed;
		right: 10px;
		top: 10px;
		.i-con{
			border-radius: 50%;
			width: 32px;
			height: 32px;
			background: #373c46;
			position: absolute;
			right: 0px;
			top: 0px;
		}
		.play-icon{
			font-size: 24px;
			position: absolute;
			left: 4px;
			top: 2px;
			color: #cccdd0;
		}
		.pause-icon{
			top: 4px;
			font-size: 24px;
			position: absolute;
			left: 4px;
			color: #cccdd0;
		}
		.expand{
			display: none;
			vertical-align: middle;
			line-height: 32px;
			color: #cccdd0;
			i {
				padding-top: 4px;
				cursor: pointer;
			}
		}
		&:hover {
			width: 50px;
			.expand {
				display: inline-block;
			}
		}
	}
}

</style>