<template>
  <div>
    <table-date-picker :rows='rows' @change='cellChange'></table-date-picker>
  </div>
</template>

<script>
import tableDatePicker from './components/table-date-picker/index.vue'
export default {
  name: 'App',
  components: {
    tableDatePicker
  },
  data () {
    return {
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
              // selected: !!~~(Math.random() * 10 / 4)
              selected: false
            }
          })
        })
      })(),
      '二零一八': [
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
    this.二零一八.forEach((i, index1) => {
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
      console.log('---------------cellChange', payload)
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
