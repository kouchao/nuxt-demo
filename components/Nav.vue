<template>
  <div class="nav">
      <nuxt-link :to="to" class="nav__item" :class="{'is-active': to == '/'}">前端艺术家</nuxt-link>
      <nuxt-link :to="to" class="nav__item" :class="{'is-active': to == '/ice'}">飞冰早报</nuxt-link>
    </div>
</template>

<script>

export default {
  prpos: {
    to: String
  }
};
</script>
