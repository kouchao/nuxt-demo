<template>
  <div class="nav">
    <nuxt-link to="/" :class="['nav-item', {'is-active': $route.name == 'index'}]">
    前端艺术家
    </nuxt-link>
    <nuxt-link to="/ice" :class="['nav-item', { 'is-active': $route.name == 'ice'}]">
    飞冰早报
    </nuxt-link>
    <nuxt-link to="/about" :class="['nav-item', { 'is-active': $route.name == 'about' }]">
    关于 <el-badge is-dot></el-badge>
    </nuxt-link>
  </div>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--borderColor);
  background: var(--bg);
}

.nav-item {
  line-height: 56px;
  margin: 0 20px;
  padding: 0 10px;
  border-bottom: 4px solid transparent;
}

.nav-item.is-active {
  border-bottom: 4px solid var(--theme);;
}

@media screen and (max-width: 800px) {
  .nav {
    position: fixed;
    justify-content: space-around;
  }

  .nav-item {
    margin: 0;
  }
}
</style>
