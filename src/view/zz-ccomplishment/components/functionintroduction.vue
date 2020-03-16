<template>
    <div class="app">
        <div class="famousteacher">
            <div class="Etitle">
                <div class="Exhibitiontitle">功 / 能 / 介 / 绍</div>
                <div class="introduction">我们的产品功能优势</div>
            </div>
            <div class="list">
                <div class="box">
                    <div class="title" v-for="(items , index) in list" :key="index">
                        <div class="picture">
                            <img class="img" :src="items.picture" alt="">
                            <div class="content" :style="{backgroundImage:'url('+bg+')'}">
                                <div class="boxtitle">{{items.title}}</div>
                                <div class="boxtext">{{items.content}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Axios from "axios";

    export default {
        name: "functionintroduction",
        components: {},
        data() {
            return {
                list: [],
                bg: '',
                choose: 10,
            };
        },
        created() {
            this.getmessage();
        },

        methods: {
            getmessage() {
                var that = this;
                Axios.get(
                    "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/zzfunctionintroduction",
                    {
                        params: {}, // 参数
                        timeout: 3000 // 配置
                    }
                ).then(res => {
                    that.list = res.data.data.famous;
                    that.bg = res.data.data.active;
                });
            },
            mouseenter(index) {
                this.choose = index;
            }

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
    .app {
        height: 870px;

        .famousteacher {
            height: 870px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FAFAFA;

            .Etitle {
                margin: 20px 0 20px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                .Exhibitiontitle {
                    width: 184px;
                    height: 44px;
                    font-size: 24px;
                    color: #333333;
                }

                .introduction {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 219px;
                    height: 14px;
                    font-size: 14px;
                    color: #333333;
                }
            }

            .list {
                display: flex;
                justify-content: center;
                align-items: center;

                .box {
                    width: 980px;
                    height: 680px;
                    // margin: 0 20px 0 20px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-items: center;
                    flex-wrap: wrap;

                    .title {
                        height: 320px;
                        width: 300px;

                        .picture {
                            position: relative;
                            height: 320px;
                            width: 300px;
                            overflow: hidden;

                            .img {

                            }

                            .content {
                                height: 320px;
                                width: 300px;
                                transition: all 0.6s;
                                color: #ffffff;
                                position: absolute;
                                top: -100%;
                                left: 0;
                                right: 0;
                                bottom: 0;

                                .boxtitle {
                                    height: 40px;
                                    font-size: 20px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }

                                .boxtext {
                                    width: 266px;
                                    margin: 0 17px;
                                }
                            }

                            &:hover {
                                .content {
                                    top: 0;
                                }
                            }
                        }
                    }

                    .title:hover {
                        transition: all 0.6s;
                        box-shadow: 0px 2px 4px 0px rgba(44, 44, 44, 0.22), 0px 3px 9px 1px rgba(43, 43, 43, 0.24), 0px 5px 18px 3px rgba(30, 30, 30, 0.11);
                    }
                }
            }
        }
    }
</style>
