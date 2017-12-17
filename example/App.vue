<template>
  <div id="app">
    <timeline :time="time" :content="content"></timeline>
  </div>
</template>

<script>
import Timeline from '../src'

export default {
  data() {
    return {
      time: '2017',
      content: ['aa']
    }
  },

  components: {
    Timeline
  }
}
</script>
