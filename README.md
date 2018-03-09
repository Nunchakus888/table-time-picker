# table-time-picker

> Use Table Time Picker for Time select in a week

### demo

![](./demo.gif)


### character
![](./demo2018.gif)

### usage

`npm i git+ssh://git@github.com:Nunchakus888/table-time-picker.git`

```
<script>
  import tableTimePicker from './table-date-picker'
</script>

<table-time-picker :rows='rows' @change='cellChange'></table-time-picker>
```
### 参数说明

| 参数 |  说明 |                    
| :---:| :---: |
| rows | Array, 必选 （二维数组）
| change | 选中触发回调，回调参数为目前选中value


### 数据结构
```
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
              selected: false
            }
          })
        })
      })()
```

这里是批量生成，可根据实际需要自定义


### 本地调试
```
git clone git@github.com:Nunchakus888/table-time-picker.git
```
`npm i`

`npm run dev`
