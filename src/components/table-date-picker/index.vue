<style lang="stylus" scoped>
.table-date-picker
  width 100%
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
    width 30px
    height 30px
  .cell-border
    background #f5f7fa
    border solid .5px #eff2f7
  .cell-selected
    background #94cff9
  .red
    color red
  .unselect
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
  name: 'table-date-picker',
  props: {
    rows: Array
  },
  data () {
    return {
    }
  },
  computed: {
    columns () {
      return ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  },
  methods: {
    handleClick(payload) {
      const { cell } = payload || {}
      cell.selected = !cell.selected
      this.$emit('change', this.getSelectedCell())
    },
    getSelectedCell() {
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
    },
    dragHandle(type, $event, payload) {
      $event.stopPropagation()
      const { cell, columnIndex, rowIndex } = payload || {}
      switch (type) {
        case 'e-dragstart':
          colStar = columnIndex
          rowStar = rowIndex
          // $event.target.style.background = '#94cff9'
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
          localStorage.setItem('cell', JSON.stringify(this.getSelectedCell()))
          preDragOverCell = null
          dragOverCells.clear()
          colStar = rowStar = null
          break
      }
    }
  }
}
</script>
