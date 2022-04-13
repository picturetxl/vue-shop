<template>
  <div class="tabbar">
    <ul>
      <li>
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </li>
      <li>
        <i class="iconfont icon-list"></i>
        <span>分类</span>
      </li>
      <li>
        <i class="iconfont icon-cart"></i>
        <span>购物车</span>
      </li>
      <li>
        <i class="iconfont icon-mine"></i>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
