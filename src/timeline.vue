<template>
  <ul class="timeline">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'timeline',

    props: {
      timelineTheme: {
        type: String,
        default: '#dbdde0'
      }
    },

    created() {
      if (this.timelineTheme) {
        document.documentElement.style.setProperty('--timelineTheme', this.timelineTheme)
      }
    }
  }
</script>

<style>
  @import "style.css";
</style>
