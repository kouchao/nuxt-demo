<template>
  <div class="container">
    <p>前端艺术家资讯整理来自于第一届前端艺术沙龙1群群主@小猴的每日资讯，感谢@小猴的坚持与付出。<a target="_blank" href="https://github.com/chenbin92/zaobao">飞冰早报</a>来自于飞冰一群，感谢飞冰一群的群主<a target="_blank" href="https://github.com/chenbin92">@思忠</a>与管理的付出。</p>
    <p>若您有什么意见或建议，方便大家共同交流，请在<a target="_blank" href="https://github.com/kouchao/nuxt-demo/issues">issues</a>中讨论。rss订阅<a target="_blank" href="https://docs.rsshub.app/programming.html#前端艺术家-飞冰早报">RSSHub</a>。关于接口和hook可以直接联系我<a href="mailto:admin@jskou.com">admin@jskou.com</a>。</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "关于"
    };
  }
};
</script>
<style scoped>
.container {
  line-height: 30px
}

a {
  color: var(--theme);
}
</style>

