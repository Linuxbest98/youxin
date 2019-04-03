<template>
	<div>
		<div class="bg">
			<div class="tanslate_box">
				<div class="select_box" @click="back">left</div>
				<div class="input_box"><input autofocus class="input_content" type="text" placeholder="在此输入单词或句子"></div>
			</div>
			<div class="lang_select">{{this.$store.state.getdata}}</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		created() {
			this.$store.dispatch('getdata')
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.auto-img{
		width: 100px;
		display: block;
	}
	.bg{
		width: 100%;
		height: 100px;
		padding: 30px 15px 15px;
		box-sizing: border-box;
		background: #f9f9f9;
		
		.tanslate_box{
			display: flex;
			width: 100%;
			height: 50px;
			border: 1px solid #eee;
			background: #fff;
			
			.select_box{
				flex: 0 0 20%;
				line-height: 50px;
				text-align: center;
			}
			
			.input_box{
				flex: 1;
				height: 100%;
				
				.input_content{
					display: block;
					box-sizing: border-box;
					width: 100%;
					height: 100%;
					border: none;
					outline: none;
					
				}
			}
		}
		
		.history{
			width: 100%;
			height: 100%;
		}
	}
</style>
	