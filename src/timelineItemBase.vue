<script>
  export default {
    name: 'TimelineItemBase',

    props: {
      color: {
        type: String,
        default: ''
      },
      lineColor: {
        type: String,
        default: ''
      },
      hollow: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        slotOthers: false
      }
    },

    computed: {
      circleStyle () {
        if (!this.color && !this.lineColor && !this.hollow) return
        let style = {}
        if (this.color) {
          style = {
            'border-color': this.color,
            'background-color': this.color
          }
        }
        if (this.lineColor) {
          style = Object.assign({}, style, {
            'border-color': this.lineColor
          })
        }
        if (this.hollow) {
          style = Object.assign({}, style, {
            'background-color': '#fff'
          })
        }
        return style
      },
      slotClass () {
        return this.slotOthers ? 'timeline-others' : ''
      }
    },

    mounted () {
      this.slotOthers = !!this.$refs.others.innerHTML
    },
  }
</script>
