<template>
  <div>
      <headerAsideMenu/>
      <div class="school-container">
        <div class="up-part">
            <span>亚卓学院</span>
        </div>
        <div class="down-part">
            <span>亚卓学院</span>
        </div>
      </div>
      <tail/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.school-container{
    min-width: 1200px;
    padding-top: 80px;
    height: 500px;
    display: flex;
    justify-content: center;
    justify-items: center;
    .up-part{
        width: 500px;
        height: 500px;
        line-height: 500px;
        text-align: center;
    }
}
</style>