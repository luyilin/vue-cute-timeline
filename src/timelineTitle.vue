<template>
  <h3 class="timeline-title">
    <div class="timeline-circle timeline-title-circle" :style="circleStyle"></div>
    <slot></slot>
  </h3>
</template>

<script>
  export default {
    name: 'timelineTitle',

    props: {
      color: {
        type: String,
        default: '#dbdde0'
      },
      hollow: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      circleStyle () {
        if (!this.color && !this.hollow) return
        let style = {}
        if (this.color) {
          style = {
            'border-color': this.color,
            'background-color': this.color
          }
        }
        if (this.hollow) {
          style = Object.assign({}, style, {
            'background-color': '#fff'
          })
        }
        return style
      }
    }

  }
</script>

<style>
  @import "style.css";
</style>
