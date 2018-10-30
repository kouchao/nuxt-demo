<template>
  <div>
    <div class="links">

      <h1 class="links__title">第一届前端艺术技术沙龙1群每日资讯整理</h1>

      <div class="links__item" v-for="item in list">
        <a :href="item.link">[{{item.updated | formatDate}}] - {{item.title}}</a>
      </div>
    </div>

  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {getList} from '~/api'

  function set0(num) {
    return num < 10 ? '0' + num : '' + num
  }

  export default {

    components: {
      Logo
    },
    filters: {
      formatDate(input) {
        var d = new Date(input);
        var year = d.getFullYear();
        var month = set0(d.getMonth() + 1);
        var day = set0(d.getDate());
        var hour = set0(d.getHours());
        var minutes = set0(d.getMinutes());
        var seconds = set0(d.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
      }
    },
    async asyncData() {
      const res = await getList();
      return {
        list: res.data.data
      }
    }
  }
</script>

<style>
  .links {
    padding: 20px;
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
</style>
