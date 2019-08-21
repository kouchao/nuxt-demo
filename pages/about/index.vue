<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav__item">前端艺术家</nuxt-link>
      <nuxt-link to="/ice" class="nav__item">飞冰早报</nuxt-link>
      <nuxt-link to="/about" class="nav__item is-active">
         关于 <el-badge is-dot></el-badge>
      </nuxt-link>
    </div>
    <div class="links" style="line-height: 30px">
      <p>前端艺术家资讯整理来自于第一届前端艺术沙龙1群群主@小猴的每日资讯，感谢@小猴的坚持与付出。<a target="_blank" class="about" href="https://github.com/chenbin92/zaobao">飞冰早报</a>来自于飞冰一群，感谢飞冰一群的群主<a target="_blank" class="about" href="https://github.com/chenbin92">@思忠</a>与管理的付出。</p>
      <p>若您有什么意见或建议，方便大家共同交流，请在<a target="_blank" class="about" href="https://github.com/kouchao/nuxt-demo/issues">issues</a>中讨论。rss订阅<a target="_blank" class="about" href="https://docs.rsshub.app/programming.html#前端艺术家-飞冰早报">RSSHub</a>。关于接口和hook可以直接联系我<a class="about" href="mailto:admin@jskou.com">admin@jskou.com</a>。</p>
      
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  async asyncData() {
   
  },
  head() {
    return {
      title: "关于"
    };
  },
  methods: {
   
  }
};
</script>
<style>
.card {
  background: #f3f3f3;
  padding: 20px;
  color: #333;
  margin-bottom: 15px;
  border-radius: 8px;
}

.form {
  border: 1px solid #c0c4cc;
  padding: 20px;
  color: #333;
}

.content {
  padding: 20px;
  word-wrap: break-word
}

.time {
  text-align: right;
}


.title {
  margin-bottom: 10px;
}

a.about {
  color: #409eff
}
</style>

