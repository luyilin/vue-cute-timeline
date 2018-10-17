<script>
  export default {
    name: 'TimelineItemBase',

    props: {
      bgColor: {
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
      },
      fontColor: {
        type: String,
        default: '#37414a'
      },
    },

    data () {
      return {
        slotOthers: false
      }
    },

    computed: {
      circleStyle () {
        if (!this.bgColor && !this.lineColor && !this.hollow) return
        let style = {}
        if (this.bgColor) {
          style = {
            'border-color': this.bgColor,
            'background-color': this.bgColor
          }
        }
        if (this.lineColor) {
          style = Object.assign({}, style, {
            'border-color': this.lineColor
          })
        }
        return style
      },
      itemStyle () {
        return {
          'color': this.fontColor
        }
      },
      slotClass () {
        let className = '';
        if (this.slotOthers) {
          className = 'timeline-others'
        }
        else if (this.hollow){
          className = 'hollow'
        }

        return className
      }
    },

    mounted () {
      this.slotOthers = !!this.$refs.others.innerHTML
    },
  }
</script>
