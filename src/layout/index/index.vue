<template>
    <div>
        <!--        头部-->
        <header-asideMenu/>
        <router-view/>
        <!--        底部-->
        <tail/>
    </div>
</template>
<script>
    import headerAsideMenu from '@/components/asideMenu/headerAsideMenu'
    import tail from '@/components/tail/tail'

    export default {
        components: {
            headerAsideMenu,
            tail,
        },
        computed: {},
        created() {

        },
        data() {
            return {}
        },
    }
</script>

<style lang="less">

</style>
