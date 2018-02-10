<template>
  <div id="app">
    <a href="https://github.com/luyilin/vue-cute-timeline" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:lightblue; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
    <timeline timelineTheme="lightblue">
      <timeline-title>2018</timeline-title>
      <timeline-item color="#9dd8e0">
        <p>Welcome to the new year!</p>
      </timeline-item>
      <timeline-item color="#e6b6b0" :hollow="true">My first 100 stars on Github 🎉</timeline-item>
      <timeline-item color="#b0e6d1">keep going</timeline-item>
      <timeline-title color="#f2d7e1">2017</timeline-title>
      <timeline-item>
        <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png" class="icon-heart" slot="others">
        <p>I wrote <a href="https://github.com/luyilin/Aoba">Aoba</a></p>
        <p class="append">A tool to create a lovely resume just with a config file.</p>
      </timeline-item>
      <timeline-item lineColor="#a6ade4">
        <p>And <a href="https://github.com/luyilin/Maltose">Maltose</a></p>
        <p class="append">A cute emoticon and emoji keyboard which can generate random emoticon or emoji and no xss.</p>
      </timeline-item>
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
    font-size: .8em;
    margin-top: 3px;
    color: #646C7C;
  }

  a {
    color: #bf6dcf;
    font-weight: bold;
    text-decoration: none;
  }

  .icon-heart {
    width: 20px;
  }

  .github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
</style>
