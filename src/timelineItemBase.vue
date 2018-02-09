<script>
  export default {
    name: 'timelineItemBase',

    data () {
      return {
        slotOthers: false
      }
    },

    props: {
      color: {
        type: String
      },
      lineColor: {
        type: String
      },
      hollow: {
        type: Boolean,
        default: false
      }
    },

    mounted () {
      this.slotOthers = !!this.$refs.others.innerHTML
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
    }
  }
</script>
