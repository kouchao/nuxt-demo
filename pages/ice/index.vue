<template>
  <div>
    <Title
      title="飞冰一群每日早报整理"
      rss="https://rsshub.app/jskou/1"
      :visited="visited"
    />
    <link-item
      v-for="item in list"
      :key="item._id"
      :href="item.link"
      :time="item.time"
    >
        {{item.tag ? `[${item.tag}]` : '' }} {{item.title}}
    </link-item>
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
  </div>
</template>

<script>
import Title from "~/components/Title";
import LinkItem from "~/components/LinkItem";
import { getList } from "~/api";

export default {
  components: {
    Title,
    LinkItem
  },
  data(){
    return {
      page: 1,
      pageSize: 30
    }
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
