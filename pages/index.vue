<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav__item is-active">前端艺术资讯</nuxt-link>
      <nuxt-link to="/ice" class="nav__item">飞冰早报</nuxt-link>
    </div>
    <div class="links">

      <h1 class="links__title">第一届前端艺术家沙龙1群每日资讯整理</h1>
      <div class="links__title">访问次数：{{count}}</div>

      <div class="links__item" v-for="item in list">
        <a :href="item.link">[{{item.time | formatDate}}] - {{item.title}}</a>
      </div>
    </div>

  </div>
</template>

<script>
  import {getList} from '~/api'
  import {formatDate} from '~/filters'


  export default {

    filters: {
      formatDate
    },
    async asyncData() {
      const res = await getList({
        type: 0
      });
      return {
        list: res.data.data,
        count: res.data.count
      }
    },

  head () {
    return {
      title: '第一届前端艺术家沙龙1群每日资讯整理'
    }
  }
  }
</script>

<style>
  .links {
    padding: 80px 20px 20px;
    width: 1200px;
    margin: auto;
  }

  .links__item {
    padding: 10px 0;
    font-size: 24px;
  }

  .links__title {
    text-align: center;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    color: #de3731;
  }

  .nav {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eee;
    background: #fff;
  }

  .nav__item {
    line-height: 56px;
    margin: 0 20px;
    padding: 0 10px;
    border-bottom: 4px solid transparent;
  }

  .nav__item.is-active {
    border-bottom: 4px solid #de3731;
  }
</style>
