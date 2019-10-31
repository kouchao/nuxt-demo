<template>
  <div>
    <h2 class="title">
      {{title}}
      <a :href="rss" target="_blank" title="订阅">
        <img class="rss" src="~/assets/rss.svg" alt="订阅"/>
      </a>
    </h2>
    <div class="title">接口调用次数：{{visited}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    visited: Number,
    rss: String
  }
};
</script>
<style scoped>
  .title {
    text-align: center;
    padding: 10px;
  }
  
  .rss {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>>

</style>
