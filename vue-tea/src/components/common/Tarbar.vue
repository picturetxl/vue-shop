<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in tabbarlist"
        :key="index"
        @click="switchtab(item.path)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarlist: [
        {
          icon: "iconfont icon-home", //* tabbar每个item的图标
          title: "首页", //* tabbar每个item的标题
          active: "", //* tabbar每个item选择之后的图标
          path: "/", //* 跳转页面
        },
        {
          icon: "iconfont icon-list", //* tabbar每个item的图标
          title: "分类", //* tabbar每个item的标题
          active: "", //* tabbar每个item选择之后的图标
          path: "/list", //* 跳转页面
        },
        {
          icon: "iconfont icon-cart", //* tabbar每个item的图标
          title: "购物车", //* tabbar每个item的标题
          active: "", //* tabbar每个item选择之后的图标
          path: "/cart", //* 跳转页面
        },
        {
          icon: "iconfont icon-mine", //* tabbar每个item的图标
          title: "我的", //* tabbar每个item的标题
          active: "", //* tabbar每个item选择之后的图标
          path: "/mine", //* 跳转页面
        },
      ],
    };
  },
  methods: {
    switchtab(path) {
      //* 当前路径则不进行跳转
      if (path == this.$route.path) return;
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: pink;
  z-index: 999;
}
.tabbar ul {
  display: flex;
  justify-content: space-around;
}
.tabbar ul li {
  display: flex;
  flex-direction: column;
}
</style>
