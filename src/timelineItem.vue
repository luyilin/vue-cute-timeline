<template>
  <li class="timeline-item">
    <div class="timeline-circle" :class="slotClass" :style="circleStyle" ref="others">
      <slot name="others"></slot>
    </div>
    <slot></slot>
  </li>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'

  export default {
    extends: timelineItemBase,
  }
</script>
