<template>
  <li class="timeline-title" :style="itemStyle">
    <div class="timeline-circle timeline-title-circle" :class="slotClass" :style="circleStyle" ref="others">
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
