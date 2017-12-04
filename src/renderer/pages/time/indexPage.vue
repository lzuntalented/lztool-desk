<template>
  <div class="time-container">
    <section class="text-center margin-t-40">
			现在的Unix时间戳(Unix timestamp)是：
			<span class="but">{{nowTime}}</span>
			<span class="but color-a2a8de" @click="refresh">刷新</span>
			<span class="but color-a2a8de" @click="start">开始</span>
			<span class="but color-a2a8de" @click="pause">暂停</span>
		</section>
		<section class="text-center margin-t-40">
			Unix时间戳（Unix timestamp）
			<input type="text" v-model="orginBJTime" class="but w90" />
			<span class="but color-a2a8de" @click="changeToText">转换成北京时间</span>
			<span class="but">{{bjTime}}</span>
		</section>
		<section class="text-center margin-t-40">
			北京时间:
			<input type="text" v-model="mY" class="but w40" />年
			<input type="text" v-model="mM" class="but w20" />月
			<input type="text" v-model="mD" class="but w20" />日
			<input type="text" v-model="mH" class="but w20" />时
			<input type="text" v-model="mS" class="but w20" />分
			<input type="text" v-model="mSS" class="but w20" />秒
			<span class="but color-a2a8de" @click="changeToTime">转换成Unix时间戳</span>
			<span class="but">{{timestamp}}</span>
		</section>
  </div>
</template>

<script>
  import Time from './index'
  export default Time
</script>

<style>
@import url(//at.alicdn.com/t/font_386007_mliceqia5p8yf1or.css);
</style>
<style lang="scss">

.time-container{
  
}

</style>