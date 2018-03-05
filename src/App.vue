<template>
  <div id='app'>
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
        [
          {
            'value': 2,
            'selected': true,
            'week': 1
          },
          {
            'value': 3,
            'selected': true,
            'week': 1
          },
          {
            'value': 4,
            'selected': true,
            'week': 1
          },
          {
            'value': 5,
            'selected': true,
            'week': 1
          },
          {
            'value': 8,
            'selected': true,
            'week': 1
          },
          {
            'value': 9,
            'selected': true,
            'week': 1
          },
          {
            'value': 10,
            'selected': true,
            'week': 1
          },
          {
            'value': 11,
            'selected': true,
            'week': 1
          },
          {
            'value': 15,
            'selected': true,
            'week': 1
          },
          {
            'value': 19,
            'selected': true,
            'week': 1
          },
          {
            'value': 20,
            'selected': true,
            'week': 1
          },
          {
            'value': 21,
            'selected': true,
            'week': 1
          },
          {
            'value': 22,
            'selected': true,
            'week': 1
          }
        ],
        [
          {
            'value': 5,
            'selected': true,
            'week': 2
          },
          {
            'value': 8,
            'selected': true,
            'week': 2
          },
          {
            'value': 11,
            'selected': true,
            'week': 2
          },
          {
            'value': 14,
            'selected': true,
            'week': 2
          },
          {
            'value': 15,
            'selected': true,
            'week': 2
          },
          {
            'value': 19,
            'selected': true,
            'week': 2
          },
          {
            'value': 22,
            'selected': true,
            'week': 2
          }
        ],
        [
          {
            'value': 5,
            'selected': true,
            'week': 3
          },
          {
            'value': 8,
            'selected': true,
            'week': 3
          },
          {
            'value': 11,
            'selected': true,
            'week': 3
          },
          {
            'value': 15,
            'selected': true,
            'week': 3
          },
          {
            'value': 19,
            'selected': true,
            'week': 3
          },
          {
            'value': 22,
            'selected': true,
            'week': 3
          }
        ],
        [
          {
            'value': 2,
            'selected': true,
            'week': 4
          },
          {
            'value': 3,
            'selected': true,
            'week': 4
          },
          {
            'value': 4,
            'selected': true,
            'week': 4
          },
          {
            'value': 5,
            'selected': true,
            'week': 4
          },
          {
            'value': 8,
            'selected': true,
            'week': 4
          },
          {
            'value': 11,
            'selected': true,
            'week': 4
          },
          {
            'value': 15,
            'selected': true,
            'week': 4
          },
          {
            'value': 19,
            'selected': true,
            'week': 4
          },
          {
            'value': 20,
            'selected': true,
            'week': 4
          },
          {
            'value': 21,
            'selected': true,
            'week': 4
          },
          {
            'value': 22,
            'selected': true,
            'week': 4
          }
        ],
        [
          {
            'value': 2,
            'selected': true,
            'week': 5
          },
          {
            'value': 8,
            'selected': true,
            'week': 5
          },
          {
            'value': 11,
            'selected': true,
            'week': 5
          },
          {
            'value': 15,
            'selected': true,
            'week': 5
          },
          {
            'value': 19,
            'selected': true,
            'week': 5
          },
          {
            'value': 22,
            'selected': true,
            'week': 5
          }
        ],
        [
          {
            'value': 2,
            'selected': true,
            'week': 6
          },
          {
            'value': 8,
            'selected': true,
            'week': 6
          },
          {
            'value': 11,
            'selected': true,
            'week': 6
          },
          {
            'value': 15,
            'selected': true,
            'week': 6
          },
          {
            'value': 19,
            'selected': true,
            'week': 6
          },
          {
            'value': 22,
            'selected': true,
            'week': 6
          }
        ],
        [
          {
            'value': 2,
            'selected': true,
            'week': 7
          },
          {
            'value': 3,
            'selected': true,
            'week': 7
          },
          {
            'value': 4,
            'selected': true,
            'week': 7
          },
          {
            'value': 5,
            'selected': true,
            'week': 7
          },
          {
            'value': 8,
            'selected': true,
            'week': 7
          },
          {
            'value': 9,
            'selected': true,
            'week': 7
          },
          {
            'value': 10,
            'selected': true,
            'week': 7
          },
          {
            'value': 11,
            'selected': true,
            'week': 7
          },
          {
            'value': 14,
            'selected': true,
            'week': 7
          },
          {
            'value': 15,
            'selected': true,
            'week': 7
          },
          {
            'value': 16,
            'selected': true,
            'week': 7
          },
          {
            'value': 19,
            'selected': true,
            'week': 7
          },
          {
            'value': 20,
            'selected': true,
            'week': 7
          },
          {
            'value': 21,
            'selected': true,
            'week': 7
          },
          {
            'value': 22,
            'selected': true,
            'week': 7
          }
        ]
      ]
    }
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
