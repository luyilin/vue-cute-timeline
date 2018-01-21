<script>
  export default {
    name: 'timelineItemBase',

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

    computed: {
      circleStyle () {
        if (!this.color && !this.hollow) return
        let style = {}
        if (this.color) {
          style = {
            'border-color': this.color,
            'background-color': this.color
          }
        }
        if (this.hollow) {
          style = Object.assign({}, style, {
            'background-color': '#fff'
          })
        }
        return style
      }
    }

  }
</script>

<style>
  @import "style.css";
</style>

