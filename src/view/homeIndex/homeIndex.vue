<template>
    <div>
<!--        视频-->
        <banner/>
<!--         解决方案-->
        <solve/>
<!--         课程展示 -->
        <curriculum/>
<!--         核心展示 -->
        <div class="exhibition">
            <HelloWorld/>
        </div>
        <wisdom/>
        <ecology/>
    </div>
</template>
<script>
import banner from './components/banner.vue'
import HelloWorld from './components/HelloWorld.vue'
import curriculum from './components/curriculum.vue'
import wisdom from './components/wisdom.vue'
import solve from './components/solve.vue'
import ecology from './components/ecology.vue'
export default {
    components: {
        banner,
        solve,
        curriculum,
        HelloWorld,
        wisdom,
        ecology,
    }
}
</script>

<style scoped lang="less">

</style>
