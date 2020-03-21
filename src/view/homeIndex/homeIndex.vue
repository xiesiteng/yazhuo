<template>
  <div>
    <!-- 亚卓教育素养培养生态空间 -->
    <banner />
    <!-- 亚卓教育素养培养全场景覆盖 -->
    <solve />
    <!-- 精品课程展示 -->
    <curriculum />
    <!-- 核心展示++原型图没有 -->
    <!-- <div class="exhibition">
      <HelloWorld />
    </div>-->
    <!-- 智慧教学 -->
    <wisdom />
    <!-- 生态共建 -->
    <ecology />

    <back-top></back-top>
  </div>
</template>

<script>
import banner from "./components/banner.vue";
import HelloWorld from "./components/HelloWorld.vue";
import curriculum from "./components/curriculum.vue";
import wisdom from "./components/wisdom.vue";
import solve from "./components/solve.vue";
import ecology from "./components/ecology.vue";
export default {
  components: {
    banner,
    solve,
    curriculum,
    HelloWorld,
    wisdom,
    ecology
  }
};
</script>

<style scoped lang="less">
</style>
