import Timeline from './timeline.vue'
import TimelineItem from './timelineItem.vue'
import TimelineTitle from './timelineTitle.vue'

export {
  Timeline,
  TimelineItem,
  TimelineTitle
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Timeline.name, Timeline)
  window.Vue.component(TimelineItem.name, TimelineItem)
  window.Vue.component(TimelineTitle.name, TimelineTitle)
}
