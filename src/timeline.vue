<template>
  <ul class="timeline">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'timeline',

    props: {
      timelineLine: {
        type: String,
        default: '#dbdde0'
      }
    },

    created() {
      if (this.timelineLine) {
        document.documentElement.style.setProperty('--timelineLine', this.timelineLine)
      }
    }
  }
</script>

<style>
  @import "style.css";
</style>
