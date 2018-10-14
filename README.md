# vue-cute-timeline

[![NPM version](https://img.shields.io/npm/v/vue-cute-timeline.svg?style=flat)](https://npmjs.com/package/vue-cute-timeline) [![NPM downloads](https://img.shields.io/npm/dm/vue-cute-timeline.svg?style=flat)](https://npmjs.com/package/vue-cute-timeline) [![CircleCI](https://circleci.com/gh/luyilin/vue-cute-timeline/tree/master.svg?style=shield)](https://circleci.com/gh/luyilin/vue-cute-timeline/tree/master)

[DEMO](https://vue-cute-timeline.netlify.com/)

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
    <timeline-item bg-color="#9dd8e0">item1</timeline-item>
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

### `<timeline>` props

It will be better to use hyphenated attributes instead of camelcase attributes. [The discussion](https://stackoverflow.com/questions/1696864/naming-class-and-id-html-attributes-dashes-vs-underlines) explained why. 

- `timeline-theme`

  The theme color of the timeline component.

  Set the line's and circle's color.

  ```
  Type: string
  Default: #dbdde0
  ```

- `timeline-bg`

  The background color of the timeline circle component (for hollow and others if needed).

  Set the hollow circle's and other timeline symbol's default background color.

  ```
  Type: string
  Default: #dbdde0
  ```

### `<timeline-item>` / `<timeline-title>` props

- `bg-color`

  Set the circle's and the circle's border color.

  ```
  Type: string
  Default: #dbdde0
  ```

- `line-color`

  Set only the circle's border color.

  ```
  Type: string
  Default: #dbdde0
  ```

- `hollow`

  Control whether the circle is hollow or not.
  _Note** When `hollow` cannot be used together with `bg-color`, unless you wish to change the hollow background color.

  ```
  Type: boolean
  Default: false
  ```
- `font-color`

  Set the timeline item or title font color.
  Or you can set font color by add a className, as the content of the timeline item/title is a slot.

  ```
  Type: string
  Default: #37414a
  ```


### Slots

- `others`

  Don't like the circle? You can set it to a image, iconfont or anything you want.

  ```html
  <timeline-item>
    <img
        src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png"
        class="icon-heart"
        slot="others"
    />
  </timeline-item>
  ```

## License

MIT &copy; [luyilin](https://github.com/luyilin)

> [minemine.cc](https://minemine.cc) · GitHub [@luyilin](https://github.com/luyilin) · Twitter [@luyilin12](https://twitter.com/luyilin12)
