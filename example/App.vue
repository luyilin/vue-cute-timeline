<template>
  <div id="app">
    <timeline>
      <timeline-title>2018</timeline-title>
      <timeline-item>
        <p>minemine</p>
        <p>testtttttt</p>
      </timeline-item>
      <timeline-item>eeww</timeline-item>
      <timeline-item>eeww</timeline-item>
      <timeline-title>2017</timeline-title>
      <timeline-item>
        <p>minemine</p>
        <p>testtttttt</p>
      </timeline-item>
      <timeline-item>eeww</timeline-item>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from '../src'

export default {
  data() {
    return {
    }
  },

  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>
