<template>
  <div class="nav-bar" @click="itemClick">
    <div class="left"><slot name="left"></slot></div>
      <div class="center-1" ><slot name="center-1"></slot></div>
    <div class="center-2" ><slot name="center-2"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar",
  props:{
    path:String,
  },

  methods:{
    itemClick(){
      this.$router.replace(this.path)

    }
  }
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.left, .right{
  flex: 1;

}
.center-1,.center-2{
  flex: 1;

}
</style>
