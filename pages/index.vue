<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav__item is-active">前端艺术家</nuxt-link>
      <nuxt-link to="/ice" class="nav__item">飞冰早报</nuxt-link>
    </div>
    <div class="links">
        <h2 class="links__title">前端艺术家1群每日资讯整理</h2>
        <div class="links__title">接口调用次数：{{visited}}</div>

      <a :href="item.link" :key="item._id" class="links__item" v-for="item in list">
        <div class="links__time">[{{item.time | formatDate}}] - </div>
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
          @size-change="sizeChange"
          @current-change="getList"
          :current-page.sync="page">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from "~/api";
import { formatDate } from "~/filters";

export default {
  filters: {
    formatDate
  },
  data(){
    return {
      page: 0,
      pageSize: 30
    }
  },
  async asyncData() {
    const res = await getList({
      type: 0
    });
    return {
      list: res.data.data,
      visited: res.data.visited,
      total: res.data.total
    };
  },
  head() {
    return {
      title: "前端艺术家"
    };
  },
  methods: {
    async getList() {
      const { page, pageSize } = this
      const res = await getList({
        type: 0,
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
