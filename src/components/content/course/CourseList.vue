<template>
  <div class="course">
<!--    <course-list-item v-for="item in course" :course-item="item"></course-list-item>-->
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
    <course-list-item></course-list-item>
  </div>
</template>

<script>
import CourseListItem from "./CourseListItem";

export default {
  name: "CourseList",
  components:{
    CourseListItem
  },
  props:{
    course:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.course{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 44px;
}
</style>
