<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav__item">前端艺术家</nuxt-link>
      <nuxt-link to="/ice" class="nav__item is-active">飞冰早报</nuxt-link>
      <nuxt-link to="/about" class="nav__item">
      关于 <el-badge is-dot></el-badge>
      </nuxt-link>
    </div>
    <div class="links">
      <h2 class="links__title">飞冰一群每日早报整理</h2>
      <div class="links__title">接口调用次数：{{visited}}</div>
      <a target="_blank" :href="item.link" :key="item._id" class="links__item" v-for="item in list">
        <div class="links__time">[{{item.time | formatDate}}] </div>
        <div class="links__a">
          {{item.tag ? `[${item.tag}]` : '' }} {{item.title}}
        </div>
      </a>
      <div class="pagination">
        <el-pagination
          background 
          layout="prev, pager, next"
          :page-sizes="[30, 50, 100, 200]"
          :page-size="pageSize"
          :total="total"
          :pager-count="5"
          @size-change="sizeChange"
          @current-change="getList"
          :current-page.sync="page">
        </el-pagination>
      </div>
      <!-- <div style="position: fixed; right: 20px; top: 80px; text-align: center">
        <a href="https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%AD%BB%E9%9A%BE%E8%80%85%E5%9B%BD%E5%AE%B6%E5%85%AC%E7%A5%AD%E6%97%A5" title="南京大屠杀死难者国家公祭日">
          <img style="width: 300px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545266658&di=1583fca6f9f249994f7b547329fb2091&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F34%2F21%2F795a2959f438a31.jpg" alt="">
          <h1>铭记历史, 珍爱和平</h1>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import { getList } from "~/api";
import { formatDate } from "~/filters";

export default {
  filters: {
    formatDate
  },
  data(){
    return {
      page: 1,
      pageSize: 30
    }
  },
  components: {
    Nav
  },
  async asyncData() {
    const res = await getList({
      type: 1
    });
    return {
      list: res.data.data,
      visited: res.data.visited,
      total: res.data.total
    };
  },
  head() {
    return {
      title: "飞冰早报"
    };
  },
  methods: {
    async getList() {
      const { page, pageSize } = this
      const res = await getList({
        type: 1,
        page: page - 1,
        pageSize
      });
      this.list = res.data.data,
      this.visited = res.data.visited,
      this.total = res.data.total
    },
    sizeChange(pageSize){
      this.pageSize = pageSize
      this.getList()
    },
    pageChange(page){
      this.page = page
      this.getList()
    }
  }
};
</script>
