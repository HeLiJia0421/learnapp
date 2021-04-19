<template>
  <div id="home">
    <nav-bar class="home-nav" path="/category">
      <div slot="left" >推荐</div>
      <div slot="center-1">分类</div>
    </nav-bar>
    <home-swiper :banner="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['精品课程推荐']" @tabClick="tabClick"></tab-control>
    <course-list :course="showCourse"></course-list>
    <course-list></course-list>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import CourseList from "../../components/content/course/CourseList";

  import {getHomeMultidata,getHomeCourse} from "../../network/home";

  export default {
    name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        CourseList
     },
     data(){
        return{
          banners:[],
          recommends:[],
          course:{
            'classic':{page:0, list:[]},
            'new':{page:0, list:[]}
          },
          currentType:'classic'
        }
     },
    computed:{
      showCourse(){
        return this.course[this.currentType].list
      }
    },
    created() {
     //请求多个数据
      this.getHomeMultidata()
      //请求课程信息数据
      this.getHomeCourse()
    },

    methods:{
      //事件监听相关方法
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='classic';
            break;
          case 1:
            this.currentType='new';
            break;
        }
      },



      //网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          console.log(res);
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeCourse(type){
        const page = this.course.page+1
        getHomeCourse(type,page).then(res=>{
          this.course[type].list.push(res.data.list)
          this.course[type].page+=1
        })
      }

    }

  }
</script>

<style scoped>
#home{
  padding-top:44px
}
.home-nav{
  background-color:var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top:44px;
  z-index: 9;
}
</style>
