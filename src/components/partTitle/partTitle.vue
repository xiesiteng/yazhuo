<template>
  <div class="title-box">
      <div class="title">
        <i :class="isWhite?'whiteLine':'blackLine'"></i>
        <span class="title-text" :class="isWhite?'whiteColor':'blackColor'">{{titleText}}</span>
        <i :class="isWhite?'whiteLine':'blackLine'"></i>
      </div>
  </div>
</template>

<script>
export default {
    props: ['isWhite', 'titleText']
}
</script>

<style scoped lang="less">
.title-box{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 60px 0 40px;
    .title{
        // position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 200px;
        i{
            width: 100px;
            height: 2px;
            display: inline-block;
            // border: 1px solid rgba(198,198,198,1);
        }
        .blackLine{
            background-color: rgba(198,198,198,1);
        }
        .whiteLine{
            background-color: #fff;
        }
        .title-text{
            // position: absolute;
            font-size:24px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            margin: 0 30px;
        }
        .blackColor{
            color:rgba(51,51,51,1);
        }
        .whiteColor{
            color: #fff;
        }
    }
}
</style>