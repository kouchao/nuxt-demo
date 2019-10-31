<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <nuxt/>
    </div>
    <Color class="color"></Color>
  </div>
</template>

<script>
import Nav from './Nav'
import Color from './Color'
export default {
  components: {
    Nav,
    Color
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
    padding: 80px 20px 20px;
    width: 920px;
    margin: auto;
  }
  @media screen and (max-width: 800px) {
    .container {
      padding: 80px 20px 20px;
      width: auto;
    }
  }
</style>
