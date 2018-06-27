<template>
  <h3 class="timeline-title" :style="itemStyle">
    <div class="timeline-circle timeline-title-circle" :class="slotClass" :style="circleStyle" ref="others">
      <slot name="others" />
    </div>
    <slot />
  </h3>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
