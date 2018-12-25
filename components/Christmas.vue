<template>
  <div class="christmas" v-if="isShow">
    <div class="img">
      <img :src="svg">
      <div class="close" @click="close">x</div>
    </div>
      
      <h1>Merry Christmas</h1>
  </div>
</template>

<script>

const svg = require('~/assets/Santa_jump_8075.svg')
export default {
  data(){
    return {
      svg,
      isShow: false
    }
  },
  mounted(){
    this.isShow = !localStorage.close
  },
  methods: {
    close(){
      localStorage.close = true
      this.isShow = false
    }
  }
};
</script>

<style>
.christmas {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .8);
  color: #fff;
}

.img {
  position: relative;
  width: 500px;
  text-align: center;
}

img {
  width: 500px;
  height: auto;
  animation: jump .5s infinite;
}

.close {
  width: 30px;
  height: 30px;
  background: #9f1e29;
  text-align: center;
  line-height: 30px;
  border-radius: 30px;
  top: 0;
  right: 0;
  position: absolute;
  cursor: pointer
}

@media screen and (max-width: 800px) {

  .img {
    width: 300px;
  }

  img {
    width: 300px;
  }
}

@keyframes jump {
0% { transform: rotate(-10deg)}
50% { transform: rotate(10deg)}
100% { transform: rotate(-10deg)}
}


</style>

