<template>
  <div class="recommend">
    <div class="recommend-item">
        <img src="../../../assets/img/homeCourse/course1.jpg" alt="">
        <div>精品课程</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/homeCourse/course2.jpg" alt="">
      <div>课本精讲</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/homeCourse/course3.jpg" alt="">
      <div>备考专栏</div>
    </div>
    <div class="recommend-item">
      <img src="../../../assets/img/homeCourse/course4.jpg" alt="">
      <div>电台播客</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 15px;
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;

}
.recommend-item img{
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
}
</style>
