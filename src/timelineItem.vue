<template>
  <li class="timeline-item">
    <div class="timeline-circle" :style="circleStyle"></div>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'timelineItem',

    props: {
      color: {
        type: String,
        default: '#dbdde0'
      },
      lineColor: {
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
