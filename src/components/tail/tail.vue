<template>
    <div class="app">
        <!--尾部组件-->
        <!-- 尾部 -->
        <div class="tail">
            <div class="part">
                <div class="up">
                    <div class="left">
                        <div class="logo">
                            <img src="../../assets/icon/页尾logo.png" alt="">
                        </div>
                        <div class="text">
                            <div class="text1">关于亚卓</div>
                            <div class="text1">帮助中心</div>
                            <div class="text1">代理招商</div>
                        </div>
                        <div class="line"></div>
                        <div class="text2">
                            <div class="tel">
                                <div class="telname">联系我们:</div>
                                <div class="telephone">tel:400-086-7229</div>
                            </div>
                            <div class="address">地址：成都市天府三街太平洋保险金融大厦</div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="wechat">
                            <div class="left">
                                <div class="word">关注我们:</div>
                                <div class="icon">
                                    <img src="../../assets/icon/微信.png" alt="">
                                </div>
                            </div>
                            <div class="rightimg">
                                <img src="../../assets/icon/微信二维码.png" alt="">
                            </div>
                        </div>
                        <div class="wechat">
                            <div class="left">
                                <div class="word">在线客服:</div>
                                <div class="icon">
                                    <img src="../../assets/icon/QQ.png" alt="">
                                </div>
                            </div>
                            <div class="rightimg">
                                <img src="../../assets/icon/客服QQ二维码.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="down">四川亚卓教育科技股份有限公司 Copyright ©2019 亚卓教育 All RIGHTS RESERVED. 蜀ICP备13026910号-2</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name: 'tail',
        components: {},
        data() {
            return {
                res: {},
            };
        },
        created() {
            this.getmessage();
        },

        methods: {
            getmessage() {
                let that = this
                Axios.get('https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/title', {
                    params: {}, // 参数
                    timeout: 3000 // 配置
                }).then((res) => {
                    that['res'] = res.data.data[0]
                    // console.log(that.res)
                })
            },
        },
    }
</script>


<style scoped lang="less">
    .tail {
        height: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F1F1F1;

        .part {
            width: 1220px;


            .up {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .left {
                    .logo {
                        width: 233px;
                        height: 15px;
                        display: block;
                    }

                    .text {
                        display: flex;
                        align-items: center;
                        color: #969696;
                        font-size: 16px;
                        height: 74px;

                        .text1 {
                            width: 84px;
                            height: 18px;
                        }
                    }

                    .line {
                        width: 106px;
                        height: 1px;
                        margin-bottom: 30PX;
                        // border:1px solid rgba(164,164,164,1);
                        background-color: rgba(164, 164, 164, 1);
                    }

                    .text2 {
                        width: 558px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: #969696;
                        font-size: 16px;
                        height: 74px;

                        .tel {
                            display: flex;
                            justify-content: space-between;
                            width: 226px;

                            .telephone {
                                font-size: 16px;
                                color: #5C5C5C;
                            }
                        }

                        .address {
                            color: #5C5C5C;
                            font-size: 16px;
                        }
                    }
                }

                .right {
                    display: flex;

                    .wechat {
                        display: flex;

                        .left {
                            display: flex;
                            flex-direction: column;
                            // justify-content: flex-end;
                            .word {
                                color: #797979;
                                font-size: 16px;

                            }

                            .icon {
                                width: 32px;
                                height: 32px;
                                // border: 1px solid blue;
                                margin-left: 40px;
                            }
                        }

                        .rightimg {
                            margin: 1px;
                            width: 140px;
                            height: 140px;
                            // border: 1px solid blue;
                        }
                    }
                }
            }

            .down {
                color: #969696;
                font-size: 16px;
            }
        }
    }
</style>
