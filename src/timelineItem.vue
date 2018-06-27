<template>
  <li class="timeline-item" :style="itemStyle">
    <div class="timeline-circle" :class="slotClass" :style="circleStyle" ref="others">
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
