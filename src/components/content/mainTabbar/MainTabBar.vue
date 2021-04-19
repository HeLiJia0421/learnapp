<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home" activeColor="Teal">
      <img slot="item-icon" src="~assets/img/tabbar/home.jpg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/dianji.jpg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/course" activeColor="Teal">
      <img slot="item-icon" src="~assets/img/tabbar/kecheng.jpg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/dianji.jpg" alt="">
      <div slot="item-text">课程</div>
    </tab-bar-item>
    <tab-bar-item path="task" activeColor="Teal">
      <img slot="item-icon" src="~assets/img/tabbar/zuoye.jpg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/dianji.jpg" alt="">
      <div slot="item-text">作业</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="Teal">
      <img slot="item-icon" src="~assets/img/tabbar/my.jpg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/dianji.jpg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.tab-bar{
  z-index: 9;
}
</style>
