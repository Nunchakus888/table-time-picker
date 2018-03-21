# table-time-picker

> Use Table Time Picker for Time select in a week
时间选择器，同样适用于电影院选座～

### demo

![](./demo.gif)


### character
![](./demo2018.gif)

### usage

`npm i git+ssh://git@github.com:Nunchakus888/table-time-picker.git`

```
import tableTimePicker from 'table-date-picker'

<table-time-picker :rows='rows' @change='cellChange'></table-time-picker>
```
### 参数说明

| 参数 |  说明 |                    
| :---:| :---: |
| rows | Array, 必选 （二维数组）
| change | 选中触发回调，回调参数为目前选中value


### 数据结构
```
rows: [
        [2, 3, 4, 5, 8, 9, 10, 11, 15, 19, 20, 21, 22],
        [5, 8, 11, 14, 15, 19, 22],
        [5, 8, 11, 15, 19, 22],
        [2, 3, 4, 5, 8, 11, 15, 19, 20, 21, 22],
        [2, 8, 11, 15, 19, 22],
        [2, 8, 11, 15, 19, 22],
        [2, 3, 4, 5, 8, 9, 10, 11, 14, 15, 16, 19, 20, 21, 22]
      ]
```

最简单的二维结构，可自己配置


### 本地调试
```
git clone git@github.com:Nunchakus888/table-time-picker.git
```
`npm i`

`npm run dev`


### 移动端
什么？移动端？不知道我懒么～～略略略。。
