<template>
      <div class="course-item">
        <div>
          <img src="../../../assets/img/course/books1.jpg" alt="">
        </div>
        <div class="course-info">
          <P>听歌学英语</P>
        </div>
      </div>
</template>

<script>
export default {
  name: "CourseListItem",
  props:{
    courseItem:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.course-item{
  position: relative;
  padding-bottom: 20px;
  font-size: 12px;
  text-align: center;
  width: 30%;


}
.course-item img{
  width: 90px;
  height: 90px;
  border-radius: 5px;
}



</style>
