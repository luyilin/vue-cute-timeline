<template>
  <div class="wrap">
    <div class="item">
      <h2>{{ time }}</h2>
      <div class="content" v-for="i in content">
        <a :href="i" target="_blank">{{ i }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Color from 'color'

  export default {
    props: ['time', 'content'],

    created() {
      console.log(this.time, this.content)
      if (this.theme) {
        document.documentElement.style.setProperty('--theme', this.theme)
        document.documentElement.style.setProperty('--dark', Color(this.theme).darken(0.2))
      }
    }
  }
</script>

<style>
  :root {
    --theme: #dcdcdc;
    --dark: #aaa;
    --font: #555;
  }

  .wrap {
    font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    position: relative;
    margin: 10px 20px;
    color: var(--font);
    -webkit-font-smoothing: antialiased;
  }

  .wrap:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: var(--theme);
  }

  .wrap h2 {
    font-size: 20px;
    margin-left: 25px;
    cursor: crosshair;
  }

  .wrap h2:after {
    position: absolute;
    content: '';
    top: 0;
    left: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--theme);
  }

  .wrap .content {
    position: relative;
    padding: 28px 0;
    margin-left: 25px;
    font-size: 16px;
    border-bottom: 1px dotted var(--theme);
  }

  .wrap .content:before {
    position: absolute;
    content: '';
    top: 45%;
    left: -31px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--theme);
    z-index: 1;
  }

  .wrap .content:hover {
    border-bottom: 1px dotted var(--dark);
  }

  .wrap .content:hover:before {
    background-color: var(--dark);
  }

  .wrap .content a {
    text-decoration: none;
    cursor: pointer;
    color: var(--font);
  }
</style>
