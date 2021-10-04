<template>
  <li :style="itemStyle" class="timeline-title">
    <div ref="others" :style="circleStyle" :class="slotClass" class="timeline-circle timeline-title-circle">
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
