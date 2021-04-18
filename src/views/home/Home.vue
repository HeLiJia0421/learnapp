<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">推荐</div>
      <div slot="center-1">分类</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidate} from "../../network/home";

  //轮播图
  import {Swiper,SwiperItem} from '../../components/common/swiper/index'

  export default {
    name: "Home",
      components:{
       NavBar,
       Swiper,
       SwiperItem
     },
     data(){
        return{
           banners:[],
           recommends:[]
        }
     },
    created() {
     //请求多个数据
    getHomeMultidate().then(res=>{
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color:var(--color-tint);
  color: white;
}
</style>
