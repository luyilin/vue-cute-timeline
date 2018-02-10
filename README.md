# vue-cute-timeline

[![NPM version](https://img.shields.io/npm/v/vue-cute-timeline.svg?style=flat)](https://npmjs.com/package/vue-cute-timeline) [![NPM downloads](https://img.shields.io/npm/dm/vue-cute-timeline.svg?style=flat)](https://npmjs.com/package/vue-cute-timeline) [![CircleCI](https://circleci.com/gh/luyilin/vue-cute-timeline/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-cute-timeline/tree/master)

[DEMO](https://luyilin.github.io/vue-cute-timeline/example/dist/)

[![Edit luyilin/vue-cute-timeline: codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/luyilin/vue-cute-timeline/tree/master/example/codesandbox)

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

#### slot

Don't like circle? Now You can set it to image、iconfont or anything you want.

e.g. 

```html
<timeline-item>
  <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png"
   class="icon-heart" slot="others">
</timeline-item>
```

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
