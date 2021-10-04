<template>
  <li :style="itemStyle" class="timeline-item">
    <div ref="others" :style="circleStyle" :class="slotClass" class="timeline-circle">
      <slot name="others" />
    </div>
    <slot />
  </li>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
