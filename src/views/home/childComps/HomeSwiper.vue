<template>
  <swiper>
    <swiper-item>
      <img src="~assets/img/swiper/swiper1.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/swiper/swiper2.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/swiper/swiper3.jpg" alt="">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/swiper/swiper4.jpg" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
//轮播图
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>


<style scoped>

</style>
