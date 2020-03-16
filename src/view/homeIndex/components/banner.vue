<template>
    <div>
        <div class="banner-box">
            <video class="video" autoplay muted="muted" loop="loop" width="100%">
                <source src="https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4" type="video/mp4"/>
            </video>
            <div :class="'searchdetail ' + (showSlideBar?'':'close')">
                <div class="word-box" v-show="showSlideBar">
                    <div class="w1">我们一起共建教育信息化解决方案</div>
                    <div class="w2">We are together Construction of educational information solutions</div>
                    <div class="input-box">
                        <input type="text" v-model="searchText" placeholder="请输入关键词"/>
                        <div class="btn">
                            <i class="iconfont iconfangdajing"></i>
                        </div>
                    </div>
                </div>
                <div :class="'slide-bar ' + (showSlideBar?'':'close')" @click="checkBar">
                    <i class="iconfont iconicon-"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'footerBar',
        components: {},
        computed: {},
        created() {

        },
        data() {
            return {
                showSlideBar: true,
                searchText: '',
            }
        },
        methods: {
            checkBar() {
                this.showSlideBar = !this.showSlideBar
                this.searchText = ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner-box {
        position: relative;
        background-size: cover;
        color: #fff;
        display: table;
        width: 100%;
        text-align: center;
        background-image: url(https://www.cdsile.com/template/default/img/banner1.jpg);
        height: 937px;

        .video {
            object-fit: fill;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .searchdetail {
            position: absolute;
            height: 296px;
            width: 100%;
            display: flex;
            top: 33%;
            @baseWidth: 650px;
            background: rgba(0, 0, 0, 0.1);

            .word-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;

                .w1 {
                    font-size: 40px;
                    font-family: REEJI;
                    font-weight: normal;
                    color: rgba(255, 255, 255, 1);
                    margin-bottom: 20px;
                    width: @baseWidth;
                    text-align-last: justify;
                }

                .w2 {
                    font-size: 18px;
                    font-family: REEJI;
                    font-weight: normal;
                    color: rgba(255, 255, 255, 1);
                    margin-bottom: 40px;
                    width: @baseWidth;
                    text-align-last: justify;
                }

                .input-box {
                    width: @baseWidth;
                    height: 60px;
                    display: flex;

                    input {
                        width: @baseWidth - 100px;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                        padding: 25px 10px;
                    }

                    .btn {
                        width: 100px;
                        height: 100%;
                        background: #007AB7;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;

                        .iconfont {
                            font-size: 24px;
                        }
                    }
                }
            }

            .slide-bar {
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0, 0, 0, 0.3);
                cursor: pointer;
                transform: rotate(180deg);

                .iconicon- {
                    font-size: 28px;
                }
            }

            .close {
                transform: rotate(0deg);
            }
        }

        .close {
            background: none;
        }
    }

</style>
