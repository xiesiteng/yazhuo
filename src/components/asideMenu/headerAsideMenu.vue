<template>
  <div class="wrapper flex-between">
    <div class="lef-box">
      <div class="logo">
        <!--                <span>{{logoText}}</span>-->
        <img :src="this.base+'logo.png'" />
      </div>
      <div class="link-list">
        <div class="link-box" v-for="item in linkList" :key="item.id">
          <a
            :href="item.url"
            :class="['link', active == item.id ? 'link-active' : '', item.children.length ? 'more' : '']"
            @click="choose(item)"
          >{{item.name}}</a>
          <ul class="slidedown-list" v-if="item.children.length">
            <li v-for="_item in item.children" :key="_item.id">
              <a @click="goPage(_item, item)">{{_item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-wrap">
      <input type="text" placeholder="请输入搜索内容" class="search-input" />
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
  created() {},
  data() {
    return {
      active: sessionStorage.getItem("headerId"),
      logoText: "YAZHUO亚卓教育",
      linkList: [
        {
          id: "a01",
          url: "/",
          name: "首页",
          children: []
        },
        {
          id: "a02",
          url: "/middleEducation",
          // url: 'page2',
          name: "课程资源",
          children: [
            // {
            //     id: "a01-2",
            //     url: "/middleEducation",
            //     // url: "educational-resources",
            //     name: '中职德育',
            // },
            // {
            //     id: "a01-3",
            //     url: "zzccomplishment",
            //     name: '中职核心素养',
            // },
            // {
            //     id: "a01-4",
            //     url: "bzr-dreamWorks",
            //     name: '班主任梦工厂',
            // },
            // {
            //     id: "a01-5",
            //     url: "ggbasic-class",
            //     name: '公共基础课',
            // },
            // {
            //     id: "a01-6",
            //     url: "steam-page",
            //     name: 'steam',
            // },
            // {
            //     id: "a01-7",
            //     url: "ggbasic-class",
            //     name: '小猛犸',
            // },{
            //     id: "a01-8",
            //     url: "zhClass",
            //     name: '综合实践活动课',
            // }
          ]
        },
        {
          id: "a03",
          url: "/wisdomPlatform",
          name: "智慧平台",
          children: []
        },
        {
          id: "a04",
          url: "/solveCase",
          name: "解决方案",
          children: [
            // {
            //     id: "a01-1q",
            //     url: "solution",
            //     name: '基教解决方案',
            // },
            // {
            //     id: "a01-11",
            //     url: "solution",
            //     name: '职教解决方案',
            // }
          ]
        },
        {
          id: "a05",
          url: "/school",
          // url: "page2",
          name: "亚卓学院",
          children: [
            // {
            //     id: "a05-1q",
            //     url: "casesharing",
            //     name: '案例分享',
            // },
            // {
            //     id: "a05-2q",
            //     url: "forum",
            //     name: '论坛/讨论',
            // }
          ]
        }
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
          id: "b01",
          url: "/login",
          name: "登录"
        }
      ]
    };
  },
  created() {
    this.judgeRoute();
  },
  methods: {
    goPage(data, item) {
      // 点击之后把:before伪元素移动到对应父元素上
      sessionStorage.setItem("headerId", item.id);
      this.active = sessionStorage.getItem("headerId");
      // console.log(data.url)
      this.$router.push(data.url);
    },
    choose(item) {
      if (item.url == "javascript:void(0)") {
        return false;
      }
      // console.log('choo')
      sessionStorage.setItem("headerId", item.id);
      this.active = sessionStorage.getItem("headerId");
    },
    // 如果session中不存在状态值就默认在首页
    judgeRoute() {
      if (this.isblank(sessionStorage.getItem("headerId"))) {
        this.active = "a01";
      }
    }
  }
};
</script>
<style lang="less">
@media screen and (max-width: 1640px) {
  .logo {
    margin-right: 100px !important;
  }
  .search-wrap {
    width: 280px !important;
  }
  .search-input {
    width: 200px !important;
  }
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 80px;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 1;
  min-width: 1200px;
}
.logo {
  margin-right: 310px;
}
.link-box {
  position: relative;
  display: inline-block;
  .link {
    position: relative;
    margin-right: 30px;
    color: #fff;
    text-decoration: none;
    display: block;
  }
  // .link:after{
  //     width: 36px;
  //     height: 4px;
  //     background-color: #fff;
  //     position: absolute;
  // }
  .link-active {
    &:before {
      content: "";
      width: 36px;
      height: 4px;
      background-color: #fff;
      position: absolute;
      bottom: -27px;
      left: 50%;
      transform: translateX(-50%);
    }
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
        background: #007ab7;
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
  border: #fff 1px solid;
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
.search-wrap {
  width: 400px;
  height: 30px;
  border-radius: 20px;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  .search-input {
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    width: 300px;
    font-size: 14px;
  }
}
</style>
