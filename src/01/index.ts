const { hex_md5 } = require('./browser')
import axios from 'axios'

var mw = Date.parse(new Date().toString()) + (16798545 + -72936737 + 156138192)

function getData(page: number) {
  const m = hex_md5(mw + '') + '丨' + mw / (-1 * 3483 + -9059 + 13542)

  return axios({
    url: 'https://match.yuanrenxue.com/api/match/1',
    headers: {
      'User-Agent': 'yuanrenxue.project'
    },
    params: {
      m: m,
      page: page
    }
  })
}

async function main() {
  let sum = 0
  let count = 0
  for (let i = 0; i < 5; i++) {
    let data: { data: { value: number }[] }
    let res = await getData(i + 1)
    data = res.data

    data.data.forEach(item => {
      sum += item.value
    })
    count += data.data.length
  }

  console.log(sum / count)
}

main()


// 1  2  9  64  625

// 5 * 5*5*5*5

