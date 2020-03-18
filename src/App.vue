<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("//at.alicdn.com/t/font_1651123_u4xq1abkgp.css");
@import url("./assets/common/common.css");

#app * {
  box-sizing: border-box;
}
* {
  // margin: 0;
  // padding: 0;
  //
}
html,
body {
  overflow-x: hidden;
}
body,
p {
  margin: 0;
  padding: 0;
}
.anisca img {
  cursor: pointer;
  -webkit-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
  -webkit-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  transform: scale(1, 1);
}
.anisca:hover img {
  -webkit-transform: scale(1.2, 1.2);
  -ms-transform: scale(1.2, 1.2);
  transform: scale(1.2, 1.2);
}
.anisca {
  cursor: pointer;
  overflow: hidden;
}
</style>
