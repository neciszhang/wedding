<template>
  <div class="preloading">
    <div class="preload-word">
		<img src="../assets/logo.svg" alt="">
		<!-- <p class="num"><span>{{loadnum}}</span>%</p> -->
	</div>
  </div>
</template>

<script>
export default {
  	name: "Preload",
  	data () {
	  return {
		loadnum:0
	  }
	},
  	mounted(){
          let self = this;
          var imageNames = [
			'imgs/bg.jpg',
			'imgs/flower.png',
			'imgs/pic.png',
			'imgs/plant.png',
			'imgs/wine.png',
			'imgs/p2-1.png',
			'imgs/p2-pic.jpg'
	    ];
	    var imagesCount = imageNames.length;
	    var resourceCount = imagesCount;
	    var loadedResourceCount = 0;
	    var images = [];
	    for (var i = 0; i < imagesCount; i++) {
	        images[i] = new Image();
	        images[i].src = imageNames[i];
	        images[i].onload = function () {
				var progress = Math.ceil(100 * (++loadedResourceCount / resourceCount));
				self.loadnum=progress;
	            if (progress>=100) {
									console.log("已加载完毕全部资源");
									self.$router.replace('home');
	            }
	        };
	    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preloading{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #88c8d5;
	z-index:1001;
	.preload-word{
		width: 2rem;
		img{
			width: 100%;
		}
		// height:0.95rem;
		//text-align: center;
		//font-size:30px;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform:translate3d(-50%,-50%,0);
		background-size:100% 100%;
		.num{
			font-size: .16rem;
			width: 100%;
			text-align: center;
			position: absolute;
			bottom: -.2rem;
			left: 0;
			color: #fff;
		}
	}
}
</style>
