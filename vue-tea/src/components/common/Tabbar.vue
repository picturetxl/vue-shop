<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in tabbarlist"
        :key="index"
        @click="switchtab(item.path)"
      >
        <!-- 用户选择哪个tabbar的item,则激活该item 即 图标换掉 -->
        <i
          class="iconfont"
          :class="$route.path.includes(item.path) ? item.active : item.icon"
        ></i>
        <span :class="$route.path.includes(item.path) ? 'itemactive' : ''">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      tabbarlist: [
        {
          icon: "icon-home1", //* tabbar每个item的图标
          title: "首页", //* tabbar每个item的标题
          active: "icon-home2", //* tabbar每个item选择之后的图标
          path: "/home", //* 跳转页面
        },
        {
          icon: "icon-list", //* tabbar每个item的图标
          title: "分类", //* tabbar每个item的标题
          active: "icon-list1", //* tabbar每个item选择之后的图标
          path: "/list", //* 跳转页面
        },
        {
          icon: "icon-cart", //* tabbar每个item的图标
          title: "购物车", //* tabbar每个item的标题
          active: "icon-cart2", //* tabbar每个item选择之后的图标
          path: "/cart", //* 跳转页面
        },
        {
          icon: "icon-mine", //* tabbar每个item的图标
          title: "我的", //* tabbar每个item的标题
          active: "icon-mine2", //* tabbar每个item选择之后的图标
          path: "/mine", //* 跳转页面
        },
      ],
    };
  },
  methods: {
    switchtab(path) {
      //* 当前路径则不进行跳转
      console.log(path);
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
  // background-color: pink;
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
.itemactive {
  color: red;
}
</style>
