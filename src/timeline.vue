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
  :root {
    --timelineTheme: #dbdde0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .timeline {
    position: relative;
    list-style: none;
    font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    color: #37414a;
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
    background-color: var(--timelineTheme);
  }

  .timeline-item {
    position: relative;
    margin: 1.5em 0 0 28px;
    padding-bottom: 1.5em;
    border-bottom: 1px dotted var(--timelineTheme);
  }
  .timeline-item:last-child {
    border-bottom: none;
  }
  .timeline-circle {
    position: absolute;
    top: .45em;
    left: -34px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--timelineTheme);
    background-color: var(--timelineTheme);
    z-index: 1;
    box-sizing: content-box;
  }

  .timeline-title {
    position: relative;
    display: inline-block;
    /**
     * BFC inline-block元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素）
     */
    color: #37414a;
    cursor: crosshair;
    margin: -.2em 0 15px 28px
  }
  .timeline-title:not(:first-child) {
    margin-top: 28px;
  }
  .timeline-title-circle {
    left: -36px;
    top: .15em;
    width: 16px;
    height: 16px;
  }
</style>
