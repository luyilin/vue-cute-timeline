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
      iSize: {
        type: String,
        default: ''
      },
      fontColor: {
        type: String,
        default: '#37414a'
      },
    },

    data () {
      return {
        slotOthers: false,
        iconSize: {
            'sm' : {
                'top': '.28em', 'left': '-34px', 'width': '10px', 'height': '10px'
            },
            'md' : {
                'top': '0em', 'left': '-39.5px', 'height': '20px', 'width': '20px'
            },
            'lg' : {
                'top': '-0.5em', 'left': '-44px', 'height': '30px', 'width': '30px'
            }
        }
      }
    },

    computed: {
      circleStyle () {
        if (!this.bgColor && !this.lineColor && !this.hollow && !this.iSize) return
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
        if (this.hollow) {
          style = Object.assign({}, style, {
            'background-color': '#fff'
          })
        }
        if (this.iSize) {
          style = Object.assign({}, style,
            this.iconSize[this.iSize]
          )
        }
        return style
      },
      itemStyle () {
        return {
          'color': this.fontColor
        }
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
