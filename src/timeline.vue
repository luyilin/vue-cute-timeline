<template>
  <ul class="timeline">
    <slot></slot>
  </ul>
</template>

<script>
  import Color from 'color'

  export default {
    name: 'timeline',

    props: ['time'],

    data() {
      return {
      }
    },

    created() {
      console.log(this)
    },

  }
</script>

<style>
  :root {
    --theme: #dbdde0;
    --font: #37414a;
    --title: #37414a;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .timeline {
    position: relative;
    list-style: none;
    font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    color: var(--font);
    -webkit-font-smoothing: antialiased;
    margin: 10px 20px;
  }

  .timeline:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: var(--theme);
  }
</style>
