<style lang="stylus" scoped>
.table-date-picker
  font-size 12px
  color #909399
  width 100%
  line-height 12px
  margin 100px auto
  .week-column
    width 10%
  .hour-row
    cursor pointer
    min-width 50%
  .cell, .cell-border
    text-align center
    border solid .5px #fff
    display block
    width 26px
    height 26px
  .cell-border
    background #f5f7fa
    border solid 1px #e4e7ed
  .cell-selected
    border solid 1px #8dc5fc
    background #bbdcfc
  .red
    color red
  .unselect
    line-height 30px
    cursor default
    user-select none
  .flex-center
    display flex
    align-items center
    justify-content center
  .flex-a-baseline-i
    align-items baseline !important
  .flex-col-start
    display flex
    flex-direction column
    justify-content flex-start
    align-items center

  .flex-v-center-j-start
    display flex
    align-items center
    justify-content flex-start
  .btn
    button
      cursor pointer
    justify-content space-evenly
    margin 20px auto
</style>


<template lang="pug">
  .table-date-picker
    .flex-center.flex-a-baseline-i(v-for="(row, columnIndex) in rows")
      .week-column.flex-col-start.unselect
        span {{ columns[columnIndex] }}
      .hour-row.flex-v-center-j-start
        span(v-for="(cell, rowIndex) in row")
          span.cell.unselect(v-if="columnIndex === 0") {{ cell.value }}
          span.cell-border(
          v-else,
          :draggable="true",
          @dragstart="dragHandle('e-dragstart', $event, {cell, columnIndex, rowIndex})",
          @dragover="dragHandle('e-dragover', $event, {cell, columnIndex, rowIndex})",
          @dragend="dragHandle('e-dragend', $event, {cell, columnIndex, rowIndex})",
          :class="{'cell-selected': cell.selected}",
          @click="handleClick({cell, columnIndex})"
          )
    .flex-center.btn
      button.el-icon-delete.red(type="text", @click="reset") 清空设置时段
      button(type="text", @click="autoGo(rows[1])") let's go

</template>

<script>
let dragOverCells = null
let preDragOverCell = null
let colStar = null
let rowStar = null
let cellStar = 0
let selectRowStar = 1
export default {
  name: 'table-time-picker',
  props: {
    selectedPoint: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      sectionTimes: null,
      categoryName: '自定义',
      rows: (() => {
        const cells = new Array(24).fill(0)
        const row = cells.map((v, i) => {
          return {
            value: i,
            selected: false
          }
        })
        return new Array(8).fill(0).map((item, index) => {
          return [...row].map((m, n) => {
            return {
              value: n,
              selected: m.selected
            }
          })
        })
      })()
    }
  },
  computed: {
    columns () {
      return ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  },
  created() {
    if (this.selectedPoint && this.selectedPoint.length) {
      this.rows.forEach((i, index) => {
        if (index > 0) {
          i && i.forEach((j, jIndex) => {
            this.selectedPoint[index - 1].forEach(k => {
              if (j.value === k) {
                i[jIndex].selected = true
              }
            })
          })
        }
      })
    }
  },
  methods: {
    handleClick(payload) {
      const { cell } = payload || {}
      cell.selected = !cell.selected
      this.$emit('change', this.getSelectedCell())
    },
    getSelectedCell() {
      return this.rows.map((i, index) => {
        if (index > 0) {
          return i.map(j => {
            if (j.selected) {
              return j.value
            }
          }).filter(i => i)
        }
      }).filter(i => i)
    },
    getSelectedCellRowAndColData() {
      const res = this.rows.map((i, index) => {
        return i.filter(j => {
          if (j.selected) {
            j.week = index
            return j
          }
        })
      }).filter(i => i.length && i)
      return res
    },
    async autoSelect(selectRowStar) {
      if (selectRowStar < 7) {
        setTimeout(() => {
          this.autoSelect(selectRowStar)
          selectRowStar++
        }, 1000)
      } else {
        selectRowStar = 0
      }
    },
    autoGo(i) {
      if (cellStar < 24) {
        setTimeout(() => {
          if (i[cellStar]) {
            i[cellStar].selected = !i[cellStar].selected
            this.$emit('change', this.getSelectedCell())
            cellStar++
            this.autoGo(i)
          }
        }, 30)
      } else {
        if (selectRowStar < 7) {
          selectRowStar++
          cellStar = 0
          this.autoGo(this.rows[selectRowStar])
        } else {
          cellStar = 0
          selectRowStar = 1
          setTimeout(() => {
            this.autoGo(this.rows[1])
          }, 2500)
        }
      }
    },
    reset() {
      cellStar = 0
      selectRowStar = 1
      this.rows.forEach(i => {
        i.forEach(j => {
          j.selected = false
        })
      })
      this.$emit('reset-selected')
    },
    dragHandle(type, $event, payload) {
      $event.stopPropagation()
      const { cell, columnIndex, rowIndex } = payload || {}
      switch (type) {
        case 'e-dragstart':
          colStar = columnIndex
          rowStar = rowIndex
          break
        case 'e-dragover':
          if (preDragOverCell === cell) return
          preDragOverCell = cell
          dragOverCells = new Set()
          dragOverCells.add(cell)
          dragOverCells.forEach(i => {
            i.selected = true
          })
          break
        case 'e-dragend':
          if (colStar === columnIndex) {
            const cells = rowIndex - rowStar
            if (cells > 0) {
              for (let i = rowStar; i < rowIndex; i++) {
                this.rows[columnIndex][i].selected = true
              }
            } else {
              for (let i = rowStar; i > rowIndex; i--) {
                this.rows[columnIndex][i].selected = true
              }
            }
          }
          this.$emit('change', this.getSelectedCell())
          preDragOverCell = null
          dragOverCells.clear()
          colStar = rowStar = null
      }
    }
  }
}
</script>
