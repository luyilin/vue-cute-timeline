# vue-time-line

## Introduction

A cute timeline component for Vue.js.

## Install

```bash
yarn add vue-cute-timeline --save
```

## Usage

```vue
<template>
  <timeline>
    <timeline-title>title</timeline-title>
    <timeline-item color="#9dd8e0">item1</timeline-item>
    <timeline-item :hollow="true">item2</timeline-item>
  </timeline>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>
```
## API

### Timeline props

#### timelineTheme

Type: `string`<br>
Default: `#dbdde0`

The theme color of the timeline component.

Set the line's and circle's color to custom colors.

### TimelineItem / TimelineTitle props

#### color

Type: `string`<br>
Default: `#dbdde0`

Set the circle's and the circle's border color to custom colors.

#### lineColor

Type: `string`<br>
Default: `#dbdde0`

Only set the circle's border color to custom colors.

#### hollow

Type: `boolean`<br>
Default: `false`

Control the circle is hollow or not.

## License

MIT &copy; [luyilin](https://github.com/luyilin)