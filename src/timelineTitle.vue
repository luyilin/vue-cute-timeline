<template>
  <h3 class="timeline-title">
    <div class="timeline-circle timeline-title-circle" :class="slotClass" :style="circleStyle" ref="others">
      <slot name="others"></slot>
    </div>
    <slot></slot>
  </h3>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
