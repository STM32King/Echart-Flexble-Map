<template>
  <div id="app">
    <div class="header">
      <h1>数据可视化大屏-ECharts</h1>
      <div class="showTime"></div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<script>
var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
  clearTimeout(t); //清除定时器
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); //获取时
  var m = dt.getMinutes(); //获取分
  var s = dt.getSeconds(); //获取秒
  document.querySelector(".showTime").innerHTML =
    "当前时间：" + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行
}
</script>

<style lang="scss">
#app {
}
.box {
  width: 1rem;
  height: 1rem;
  background-color: pink;
}
.header {
  position: relative;
  height: 1.25rem;
  background: url(../src/assets/head_bg.png) no-repeat;
  background-size: 100% 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
  .showTime {
    position: absolute;
    right: 0.375rem;
    top: 0;
    line-height: 0.9375rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.25rem;
  }
}
</style>
