<style lang="stylus">
  flex-layout($direction = row, $justify-content = space-between, $align = center, $align_self = auto)
    display flex
    flex-direction $direction
    justify-content $justify-content
    align-items $align
    align-self $align_self
  .container
    width 800px
    margin 0 auto
  .row
    font-size 12px
    min-height 36px
    line-height 36px
    border-bottom #e6ebf5 solid 1px
    .left
      width 90px
    .wrap
      flex-flow wrap
    .section-time
      display inline-block
      width 100px
  .flex-col-start
    flex-layout(column, start)
  .flex-j-start
    width 100%
    flex-layout(row, start)
  .flex-a-center
    flex-layout()

</style>

<template>
  <div class="flex-col-start container">
    <div v-for="(item, index) in details" class="flex-j-start flex-a-center row time-period__item">
      <span class="left text-hint-color">每周{{ week[index] }}</span>
        <span class="flex-j-start wrap">
          <template v-if="item && item.length">
            <span v-for="(section, sIndex) in timeSectionFormat(item)" class="section-time">
              {{ section }}
            </span>
          </template>
          <template v-else>
            <span class="text-hint-color">额，我表示无fuck说～</span>
          </template>
        </span>
    </div>
  </div>
</template>

<script>
import timeSectionFormat from './time-format'

export default {
  name: 'time-section',
  props: {
    details: {
      type: Array,
      default () {
        return null
      }
    }
  },

  data () {
    return {
      showDialog: false,
      week: ['一', '二', '三', '四', '五', '六', '日']
    }
  },

  methods: {
    timeSectionFormat: timeSectionFormat,
    close () {
      this.$emit('close-time-section')
    }
  }
}
</script>
