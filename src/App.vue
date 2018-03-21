<template>
  <div>
    <table-time-picker
      :selectedPoint="rows"
      @change="cellChange"
      @reset-selected="rows = []"
    >
    </table-time-picker>
    <time-section :details="rows"></time-section>

  </div>
</template>

<script>
import tableTimePicker from './table-date-picker'
import TimeSection from './table-date-picker/time-section'
export default {
  name: 'App',
  components: {
    tableTimePicker,
    TimeSection
  },
  data () {
    return {
      rows: [
        [2, 3, 4, 5, 8, 9, 10, 11, 15, 19, 20, 21, 22],
        [5, 8, 11, 14, 15, 19, 22],
        [5, 8, 11, 15, 19, 22],
        [2, 3, 4, 5, 8, 11, 15, 19, 20, 21, 22],
        [2, 8, 11, 15, 19, 22],
        [2, 8, 11, 15, 19, 22],
        [2, 3, 4, 5, 8, 9, 10, 11, 14, 15, 16, 19, 20, 21, 22]
      ]
    }
  },
  mounted() {
    this.rows.forEach((i, index1) => {
      i.forEach(l => {
        this.rows.forEach((j, index2) => {
          j.forEach(k => {
            if (index2 && index2 === index1 + 1) {
              if (l === k.value) {
                k.selected = true
              }
            }
          })
        })
      })
    })
  },
  methods: {
    cellChange(payload) {
      this.rows = payload
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
