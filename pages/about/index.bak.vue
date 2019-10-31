<template>
  <div>
    <div class="nav">
      <nuxt-link to="/" class="nav__item">前端艺术家</nuxt-link>
      <nuxt-link to="/ice" class="nav__item">飞冰早报</nuxt-link>
      <nuxt-link to="/message" class="nav__item is-active">
         留言板 <el-badge is-dot></el-badge>
      </nuxt-link>
    </div>
    <div class="container">
      <div class="card" :key="item._id" v-for="item in list">
        <div class="name">{{item.name}}说：</div>
        <div class="content">{{item.content}}</div>
        <div class="time">{{item.created | formatTime}}</div>
      </div>
      <div class="form">
        <div class="title">我也说一句：</div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="昵称" prop="name">
            <el-input v-model="form.name" placeholder="请填写昵称"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请填写邮箱(不会公开)"></el-input>
          </el-form-item>
          <el-form-item label="留言" prop="content">
            <el-input type="textarea" placeholder="请填写您的意见和建议或者其他什么都可以" v-model="form.content" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">留言</el-button>
          </el-form-item>
        </el-form>
      </div>
      
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
          :current-page.sync="page"
        ></el-pagination>
      </div>
    </div>
    <!-- <div style="position: fixed; right: 20px; top: 80px; text-align: center">
      <a href="https://baike.baidu.com/item/%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%AD%BB%E9%9A%BE%E8%80%85%E5%9B%BD%E5%AE%B6%E5%85%AC%E7%A5%AD%E6%97%A5" title="南京大屠杀死难者国家公祭日">
        <img style="width: 300px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545266658&di=1583fca6f9f249994f7b547329fb2091&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F34%2F21%2F795a2959f438a31.jpg" alt="">
        <h1>铭记历史, 珍爱和平</h1>
      </a>
    </div> -->
  </div>
</template>

<script>
import { getMessage, sendMessage } from "~/api";
import { formatTime } from "~/filters";

export default {
  filters: {
    formatTime
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        content: ""
      },
      rules: {
        name: [
          { required: true, message: '请填写昵称', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请填写留言内容', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
        ]
      },
      page: 0,
      pageSize: 30
    };
  },
  async asyncData() {
    const res = await getMessage({});
    return {
      list: res.data.data,
      total: res.data.total
    };
  },
  head() {
    return {
      title: "留言板"
    };
  },
  methods: {
    async getList() {
      const { page, pageSize } = this;
      const res = await getMessage({
        page: page - 1,
        pageSize
      });
      (this.list = res.data.data), (this.total = res.data.total);
    },
    sizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getList();
    },
    pageChange(page) {
      this.page = page;
      this.getList();
    },
    onSubmit(){
        this.$refs['form'].validate(async (valid) => {
          if (valid) {
            const res = await sendMessage(this.form)
            if(res.data.code == 0){
              this.$alert('提交成功！刷新后展示', '提示', {
                confirmButtonText: '确定',
              });
            } else {
               this.$alert('提交失败！', '提示', {
                confirmButtonText: '确定',
              });
            }
          } else {
            return false;
          }
        });
    }
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
</style>

