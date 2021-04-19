<template>
  <div class="feature">
    <div id="new">最新上架</div>

      <img src="~assets/img/home/news1.jpg" alt="">

  </div>
</template>

<script>
export default {
  name: "FeatureView"
}
</script>

<style scoped>
.feature{
  text-align:center;
  color: var(--color-high-text);
}
#new{
  margin-top: 8px;
  margin-left: 5px;
}
.feature img{
  width: 100%;
  height: 160px;
  margin-top: 5px;
}
</style>
