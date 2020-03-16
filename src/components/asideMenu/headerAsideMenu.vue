<template>
    <div class="wrapper">
        <div class="lef-box">
            <div class="logo">
                <!--                <span>{{logoText}}</span>-->
                <img src="https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/icon/logo.png" alt="">
            </div>
            <div class="link-list">
                <div class="link-box" v-for="item in linkList" :key="item.id">
                    <a :href="item.url"
                       :class="'link ' + (item.children.length ? 'more' : '')">
                        {{item.name}}
                    </a>
                    <ul class="slidedown-list" v-if="item.children.length">
                        <li v-for="_item in item.children" :key="_item.id">
                            <a @click="goPage(_item)">{{_item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="button-group">
            <a :href="item.url" v-for="item in btns" :key="item.id" class="link">{{item.name}}</a>
        </div>
    </div>
</template>
<script>
    export default {
        components: {},
        computed: {},
        created() {

        },
        data() {
            return {
                logoText: "YAZHUO亚卓教育",
                linkList: [
                    {
                        id: "a01",
                        url: "/",
                        name: '首页',
                        children: [],
                    },
                    {
                        id: "a02",
                        url: "page2",
                        name: '课程资源',
                        children: [
                            {
                                id: "a01-2",
                                url: "educational-resources",
                                name: '中职德育',
                            },
                            {
                                id: "a01-3",
                                url: "zzccomplishment",
                                name: '中职核心素养',
                            },
                            {
                                id: "a01-4",
                                url: "bzr-dreamWorks",
                                name: '班主任梦工厂',
                            },
                            {
                                id: "a01-5",
                                url: "ggbasic-class",
                                name: '公共基础课',
                            },
                            {
                                id: "a01-6",
                                url: "steam-page",
                                name: 'steam',
                            },
                            {
                                id: "a01-7",
                                url: "ggbasic-class",
                                name: '小猛犸',
                            },{
                                id: "a01-8",
                                url: "zhClass",
                                name: '综合实践活动课',
                            }
                        ]

                    },
                    {
                        id: "a03",
                        url: "#/home/productcenter",
                        name: '智慧平台',
                        children: [],
                    },
                    {
                        id: "a04",
                        url: "#/home/solution",
                        name: '解决方案',
                        children: [
                            {
                                id: "a01-1q",
                                url: "solution",
                                name: '基教解决方案',
                            },
                            {
                                id: "a01-11",
                                url: "solution",
                                name: '职教解决方案',
                            }
                        ]
                    },
                    {
                        id: "a05",
                        url: "page2",
                        name: '亚卓学院',
                        children: [
                            {
                                id: "a05-1q",
                                url: "casesharing",
                                name: '案例分享',
                            },
                            {
                                id: "a05-2q",
                                url: "forum",
                                name: '论坛/讨论',
                            }
                        ],
                    },
                    // {
                    //     id: "a06",
                    //     url: "page2",
                    //     name: '服务',
                    //     children: [
                    //         {
                    //             id: "a06-01",
                    //             url: "CloudServices",
                    //             name: '云服务',
                    //         },
                    //         {
                    //             id: "a06-02",
                    //             url: "CloudServices",
                    //             name: '本地服务',
                    //         }
                    //     ],
                    // },
                ],
                btns: [
                    {
                        id: 'b01',
                        url: "#/login",
                        name: "登录",
                    }
                ],
                hoverIndex: 1,
            }
        },
        methods: {
            checkMenu(index) {
                this.hoverIndex = index
            },
            goPage(data) {
                this.$router.push({name: data.url, params: {userId: 123}})
            }
        }
    }
</script>
<style lang="less">
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 80px;
        align-items: center;
        background: rgba(0, 0, 0, .1);
        padding: 0 60px;
        justify-content: space-between;
        z-index: 1;
    }

    .logo {
        margin-right: 310px;
    }

    .link-box {
        position: relative;
        display: inline-block;

        .link {
            position: relative;
            margin-right: 38px;
            color: #fff;
            text-decoration: none;
        }

        .slidedown-list {
            position: absolute;
            list-style: none;
            width: 240px;
            background: #fff;
            padding: 20px 0;
            text-align: center;
            border-radius: 10px;
            left: -73%;
            top: 80%;
            display: none;

            a {
                display: flex;
                height: 30px;
                align-items: center;
                justify-content: center;
                color: #000;
                cursor: pointer;

                &:hover {
                    background: #007AB7;
                    color: #fff0b7;
                }
            }

            &:after {
                content: "";
                position: absolute;
                width: 0;
                height: 0;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-bottom: 13px solid #ffffff;
                left: 45%;
                top: -13px;
            }

            &:hover {
                display: block;
            }
        }

        &:hover {
            .slidedown-list {
                display: block;
            }
        }
    }

    .link {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
    }

    .button-group {
        border: #fff 1.5px solid;
        padding: 3px 8px;
    }

    .more {
        &:after {
            content: "";
            position: absolute;
            top: 8px;
            right: -15px;
            display: block;
            width: 0;
            height: 0;
            border-width: 8px 5px 0;
            border-style: solid;
            border-color: #fff transparent transparent;
        }
    }

    .lef-box {
        display: flex;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        .link-list {
            height: 100%;
            display: flex;
            align-items: center;

            .link-box {
                height: 100%;
                display: flex;
                align-items: center;
            }
        }

    }

    .wrapper {
        min-width: 1400px;
    }
</style>
