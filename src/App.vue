<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("//at.alicdn.com/t/font_1651123_u4xq1abkgp.css");
@import url("./assets/common/common.css");

// 黄老师：最后请谢兄将以下合并到common.css文件中

#app * {
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
}
select,
button {
  border: none;
  outline: none;
}
body,
p {
  margin: 0;
  padding: 0;
}
.anisca {
  cursor: pointer;
  overflow: hidden;
}
.anisca img {
  cursor: pointer;
  transition: all 0.8s;
  transform: scale(1, 1);
}
.anisca:hover img {
  transform: scale(1.2, 1.2);
}
</style>
