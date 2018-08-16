<template>
  <div class="home show">
    <div class="bg">
      <div class="part1" @click="topart2">
        <div class="flower"></div>
        <div class="pic"></div>
        <div class="plant"></div>
        <div class="wine"></div>
      </div>

      <div class="part2" @click="topart3">
        <div class="p2-2-box">
          <div class="p2-2" :class="{'active': isEnd}"></div>
        </div>
        <div class="p2-1"></div>
      </div>
      <div class="part3" @click="topart4"></div>
      <div class="part4" @click="topart5"></div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import anime from "animejs";

export default {
  name: "home",
  data(){
    return {
      isEnd:false
    }
  },
  methods: {
    topart2() {
      let self=this;
      anime({
        targets: ".bg",
        scale: [
          { value: 0.3, duration: 1000, easing: "easeOutCubic" },
          { value: 1, duration: 1000, delay: 1000, easing: "easeInCubic" }
        ],
        transformOrigin: [{ value: "20.3rem 37rem 0", duration: 0 }],
        translateX: [
          {
            value: "-13.61rem",
            duration: 1000,
            delay: 1000,
            easing: "easeInCubic"
          }
        ],
        translateY: [
          {
            value: "-0.7rem",
            duration: 1000,
            delay: 1000,
            easing: "easeInCubic"
          }
        ],
        complete: function() {
            self.isEnd=true;
        }
      });
    },
    topart3() {
      anime({
        targets: ".bg",
        scale: [
          { value: 0.6, duration: 2300, delay: 300, easing: "easeInSine" },
          { value: 1, duration: 2300, delay: 100, easing: "easeInSine" }
        ],
        translateX: [
          {
            value: "-45rem",
            duration: 1000,
            delay: 800,
            easing: "easeInQuint"
          },
          {
            value: "-26.97rem",
            duration: 1000,
            delay: 800,
            easing: "easeInSine"
          }
        ],
        translateY: [
          { value: "16rem", duration: 1000, easing: "easeInQuint" },
          {
            value: "4rem",
            duration: 1000,
            delay: 2500,
            easing: "easeInSine"
          }
        ]
      });
    },
    topart4() {
      anime({
        targets: ".bg",
        scale: [
          { value: 0.6, duration: 2300, delay: 300, easing: "easeInSine" },
          { value: 1, duration: 2300, delay: 100, easing: "easeInSine" }
        ],
        translateX: [
          {
            value: "-65rem",
            duration: 1000,
            delay: 800,
            easing: "easeInQuint"
          },
          {
            value: "-48.56rem",
            duration: 1000,
            delay: 800,
            easing: "easeInSine"
          }
        ],
        translateY: [
          { value: "16rem", duration: 1000, easing: "easeInQuint" },
          {
            value: "1.8rem",
            duration: 1000,
            delay: 2500,
            easing: "easeInSine"
          }
        ]
      });
    },
    topart5() {
      anime({
        targets: ".bg",
        scale: [
          { value: 0.6, duration: 2300, delay: 300, easing: "easeInSine" },
          { value: 1, duration: 2300, delay: 100, easing: "easeInSine" }
        ],
        translateX: [
          {
            value: "-85rem",
            duration: 1000,
            delay: 800,
            easing: "easeInQuint"
          },
          {
            value: "-76.03rem",
            duration: 1000,
            delay: 800,
            easing: "easeInSine"
          }
        ],
        translateY: [
          { value: "16rem", duration: 1000, easing: "easeInQuint" },
          {
            value: "2.94rem",
            duration: 1000,
            delay: 2500,
            easing: "easeInSine"
          }
        ]
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .bg {
    width: (10965/100) + rem;
    height: (4356/100) + rem;
    background: url("/test/imgs/bg.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    //part1
    left: -(1530/100) + rem;
    top: -(2630/100) + rem;
    //part2
    // left: -(2897/100) + rem;
    // top: -(2686/100) + rem;
    //part3
    // left: -(4233/100) + rem;
    // top: -(2218/100) + rem;
    //part4
    // left: -(6392/100) + rem;
    // top: -(2437/100) + rem;
    //part5
    // left: -(9119/100) + rem;
    // top: -(2334/100) + rem;
    -webkit-transform: translateZ(0);
    -webkit-transform-origin: 50% 50%;
    // -webkit-transform-origin: 20.3rem 37rem 0;
    // .part2 {
    //   position: absolute;
    //   // background: red;
    //   width: 7.5rem;
    //   height: 12rem;
    //   left: (2897/100) + rem;
    //   top: (2686/100) + rem;
    // }
    .part3 {
      position: absolute;
      // background: red;
      width: 7.5rem;
      height: 12rem;
      left: (4233/100) + rem;
      top: (2218/100) + rem;
    }
    .part4 {
      position: absolute;
      // background: red;
      width: 7.5rem;
      height: 12rem;
      left: (6392/100) + rem;
      top: (2437/100) + rem;
    }
    .pic {
      width: (342/100) + rem;
      height: (452/100) + rem;
      background: url("/test/imgs/pic.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: (1537/100) + rem;
      top: (3329/100) + rem;
    }
    .flower {
      width: (741/100) + rem;
      height: (891/100) + rem;
      background: url("/test/imgs/flower.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: (1834/100) + rem;
      top: (2904/100) + rem;
    }
    .wine {
      width: (121/100) + rem;
      height: (480/100) + rem;
      background: url("/test/imgs/wine.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: (1936/100) + rem;
      top: (3324/100) + rem;
    }
    .plant {
      width: (341/100) + rem;
      height: (130/100) + rem;
      background: url("/test/imgs/plant.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: (1575/100) + rem;
      top: (3743/100) + rem;
    }

    .p2-1 {
      width: (597/100) + rem;
      height: (380/100) + rem;
      background: url("/test/imgs/p2-1.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: (2983/100) + rem;
      top: (3429/100) + rem;
      transform: translateZ(2px);
    }
    .p2-2-box {
      width: (415/100) + rem;
      height: (505/100) + rem;
      position: absolute;
      left: (3065/100) + rem;
      top: (2970/100) + rem;
      overflow: hidden;
    }
    .p2-2 {
      width: (415/100) + rem;
      height: (505/100) + rem;
      background: url("/test/imgs/p2-pic.jpg") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate3d(0,100%,0);
    }
  }
}

.show {
  .pic {
    -webkit-animation: rollIn 1s ease both;
    animation-delay: 1s;
  }
  .flower {
    -webkit-animation: fadeInRight 1s ease both;
    animation-delay: 1.2s;
  }
  .plant {
    -webkit-animation: bounceInUp 1s ease both;
    animation-delay: 1.3s;
  }
  .wine {
    -webkit-animation: fadeIn 1s ease both;
    animation-delay: 1.3s;
  }
  .p2-2.active{
    -webkit-animation: downToTop 1.2s ease both;
    animation-delay: 0.8s;
  }
}

@keyframes downToTop
{
from {transform: translate3d(0% ,100%, 0)}
to {transform: translate3d(0%, 0%, 0)}
}
</style>

