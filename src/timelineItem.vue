<template>
  <li class="timeline-item">
    <div class="timeline-circle" :style="circleStyle"></div>
    <slot></slot>
  </li>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
