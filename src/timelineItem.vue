<template>
  <li class="timeline-item">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'timelineItem',

    props: {
      color: {
        type: String,
        default: '#dbdde0'
      },
      lineColor: {
        type: String,
        default: '#dbdde0'
      },
      hollow: {
        type: Boolean,
        default: false
      }
    },

  }
</script>

<style scoped>
  .timeline-item {
    position: relative;
    margin: 1.5em 0 0 28px;
    padding-bottom: 1.5em;
    border-bottom: 1px dotted var(--theme);
  }
  .timeline-item:last-child {
    border-bottom: none;
  }
  .timeline-item:before {
    position: absolute;
    content: '';
    top: .5em;
    left: -34px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--theme);
    background-color: var(--theme);
    z-index: 1;
  }
</style>
