<template>
	<div>
		<div class="bg">
			<div class="tanslate_box">
				<div class="select_box"></div>
				<router-link to="/search"><div class="input_box"><input class="input_content" type="text"></div></router-link>
			</div>
			<div class="lang_select"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	.auto-img{
		width: 100px;
		display: block;
	}
	.bg{
		width: 100%;
		height: 200px;
		padding: 30px 15px 15px;
		box-sizing: border-box;
		background: url(../../public/img/drawable-xhdpi-v4/bg_my_info.png) center center no-repeat;
		background-size: cover;
		
		.tanslate_box{
			display: flex;
			width: 100%;
			height: 50px;
			background: #fff;
			
			.select_box{
				flex: 0 0 20%;
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
	}
</style>
	