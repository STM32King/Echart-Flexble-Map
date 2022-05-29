<template>
  <div id="app">
    <div class="header">
      <h1>数据可视化大屏-ECharts</h1>
      <div class="showTime"></div>
    </div>

    <hello-world/>

    <!-- 页面主体部分 -->
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <!-- <h2>柱形图-就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div> -->
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化 <a href="javacript:;">2020</a><a href="javascript:;">2021</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <!-- no模块制作 -->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>100000</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <!-- 地图模块 -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图-播放量</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼形图-地区分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import OneBar from "./components/OneBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld: () => import("@/components/HelloWorld"),
    // OneBar
  },
};
</script>

// 日期
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

/* 声明字体*/
@font-face {
  font-family: electronicFont;
  src: url(./assets/font/DS-DIGIT.TTF);
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
// 页面主体盒子
.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.1875rem;
    overflow: hidden;
  }
  .panel {
    position: relative;
    height: 3.875rem;
    padding: 0 0.1875rem 0.5rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    // background: url(../src/assets/head_bg.png) no-repeat;
    background: url(./assets/line.png) rgba(255, 255, 255, 0.03);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
    .panel-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
        content: "";
      }
    }
    h2 {
      height: 0.6rem;
      color: #fff;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.25rem;
      font-weight: 400;
      a {
        color: #fff;
        text-decoration: none;
        margin: 0 0.125rem;
      }
    }
    .chart {
      height: 3rem;
    }
  }
}
// no数字模块
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 30px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-bottom: 2px solid #02a6b5;
    }
    ul {
      display: flex;
      li {
        position: relative;
        list-style: none;
        flex: 1;
        line-height: 1rem;
        font-size: 0.875rem;
        color: #ffeb7b;
        text-align: center;
        font-family: "electronicFont";
        &::after {
          content: "";
          position: absolute;
          top: 25%;
          right: 0;
          height: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
  .no-bd {
    ul {
      display: flex;
      li {
        list-style: none;
        flex: 1;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.225rem;
        height: 0.5rem;
        line-height: 0.5rem;
        padding-top: 0.125rem;
      }
    }
  }
}
.map {
  position: relative;
  height: 10.125rem;
  .map1 {
    width: 6.475rem;
    height: 6.475rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(./assets/map.png);
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8.0375rem;
    height: 8.0375rem;
    background: url(./assets/lbx.png);
    animation: rotate1 15s linear infinite; // 使用动画
    opacity: 0.6;
    background-size: 100% 100%;
  }

  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7.075rem;
    height: 7.075rem;
    background: url(./assets/jt.png);
    animation: rotate2 10s linear infinite; // 使用动画
    opacity: 0.6;
    background-size: 100% 100%;
  }
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    // background-color: pink;
    width: 100%;
    height: 10.125rem;
  }
  // 定义动画
  @keyframes rotate1 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate2 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
</style>
