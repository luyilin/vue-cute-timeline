<template>
  <div id="app">
    <timeline timelineTheme="lightblue">
      <timeline-title>人生三大难题</timeline-title>
      <timeline-item color="#9dd8e0">
        <p>早上吃啥</p>
        <p class="append">我选水煎包🙋</p>
      </timeline-item>
      <timeline-item color="#e6b6b0" :hollow="true">中午吃啥</timeline-item>
      <timeline-item color="#b0e6d1">晚上吃啥</timeline-item>
      <timeline-title color="#f2d7e1">看到人生三大难题这么简单我就放心了</timeline-title>
      <timeline-item lineColor="#a6ade4">
        <p>别想了，减肥的日子是没有夜宵的</p>
      </timeline-item>
      <timeline-item :hollow="true">我藏的零食呢？！！</timeline-item>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from '../src'

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>

<style>
  .append {
    font-size: .8em
  }
</style>
