<template>
  <h3 class="timeline-title">
    <slot></slot>
  </h3>
</template>

<script>
  export default {
    name: 'timelineTitle',

    data () {
      return {

      }
    },
  }
</script>

<style scoped>
  .timeline-title {
    position: relative;
    display: inline-block;
    /**
     * BFC inline-block元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素）
     */
    color: var(--title);
    cursor: crosshair;
    margin: -.5em 0 15px 28px
  }
  .timeline-title:not(:first-child) {
    margin-top: 28px;
  }
  .timeline-title:after {
    position: absolute;
    content: '';
    top: 0;
    left: -36px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--theme);
  }
</style>
