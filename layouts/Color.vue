<template>
  <div class="clolor">
    <div
      v-for="(item,index) in colors"
      :key="index"
      :class="['color-item', {'is-active': activeIndex == index}]"
      @click="changeColor(index)">
      <div :class="[item.color, 'block']"></div>
      <div>{{item.name}}</div>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      colors: [{
        color: 'auto',
        name: '自动'
      },{
        color: 'light',
        name: '浅色'
      },{
        color: 'dark',
        name: '深色'
      }],
      activeIndex: 0
    }
  },
  mounted(){
    this.changeColor(localStorage.colorIndex)
  },
  methods: {
    changeColor(index = 0) {
      document.querySelector('body').className = this.colors[index].color
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
  .clolor {
    position: fixed;
    display: flex;
    align-items: center;
    top: 80px;
    right: 0;
    border: 1px solid var(--borderColor);
    text-align: center
  }

  .auto.block {
    --bg: transparent;
    background-image: linear-gradient(to right, #fff , #000);
  }

  .block {
    margin: 5px;
    width: 40px;
    height: 20px;
    background: var(--bg);
    border: 1px solid var(--borderColor);
    border-radius: 4px;
  }

  .is-active .block{
    border-color: var(--theme)
  }

  .is-active {
    color: var(--theme)
  }
</style>