<template lang="html">
  <div class="layout-app">
    <y-header class="layout-header"></y-header>
    <div class="layout-container container">
      <div class="wrapper">
        <router-view class="content"></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .layout-app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .layout-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background-color: #20a0ff;
  }

  .layout-container {

    position: absolute;
    left: 0;
    top: 70px;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    width: auto;
  }

</style>
