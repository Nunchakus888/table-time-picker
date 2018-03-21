const TIME_SPLIT = ':00'
const padStartWithZero = function (str) {
  return str.toString().padStart(2, 0)
}

export default function timeSection (list) {
  if (list && list.length) {
    list = [...new Set(list)].sort((a, b) => a - b)
    let group = []
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] - list[i] === 1) {
          group.push([list[i], list[j]])
        }
      }
    }
    // Reduce and merge arrays which those include same value.
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        for (let k = 0; k < 2; k++) {
          for (let l = 0; l < 2; l++) {
            if (group[i][k] === group[j][l]) {
              group[j].push(...group[i])
              group[i] = []
            }
          }
        }
      }
    }
    group = group.filter(i => i.length && i)
    // duplicate sort
    group.forEach((i, index) => {
      group[index] = [...new Set(i)].sort((a, b) => a - b)
    })
    let sectionTimes = []
    group.forEach(i => {
      // 降维（黑人问号脸)
      sectionTimes.push(...i)
    })
    list.forEach((i, index) => {
      sectionTimes.forEach(j => {
        if (i === j) {
          list[index] = undefined
        }
      })
    })
    list.forEach((i, index) => {
      // resolve the time str of point
      if (i !== undefined) {
        list[index] = padStartWithZero(i) + TIME_SPLIT + '～' + padStartWithZero(i + 1) + TIME_SPLIT
      }
    })
    // resolve the time str of section
    group.forEach((j, index) => {
      list.push(padStartWithZero(j[0]) + TIME_SPLIT + '～' + padStartWithZero(j[j.length - 1] + 1) + TIME_SPLIT)
    })
    list = list.filter(i => i)
    // todo sort result array~
    return [...new Set(list)]
  }
}
