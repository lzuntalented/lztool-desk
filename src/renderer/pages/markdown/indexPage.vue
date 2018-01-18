<template>
	<el-card class="markdown-container box-card">
		<mavon-editor v-model="markdownTxt"/>
	</el-card>
</template>

<script>
  import Mardown from './index'
  export default Mardown
</script>

<style lang="scss">

.markdown-container{
  .text-center{
		text-align: center;
	}
	.f14{
		font-size: 14px;
	}
	.m-t-10{
		margin-top: 10px;
	}
}

</style>