<template>
  <h3 class="timeline-title">
    <div class="timeline-circle timeline-title-circle" :style="circleStyle"></div>
    <slot></slot>
  </h3>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
