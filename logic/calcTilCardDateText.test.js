import { addFormattedPostTime } from './calcTilCardDateText'

test('must return dateText', () => {
  var date = convertDateToUTC(new Date('2015-08-25T15:35:58.000Z'))
  var seconds = date.getTime() / 1000

  const input = [
    {
      tilContentText: 'text',
      date: {
        seconds: seconds
      }
    },
    {
      tilContentText: 'text',
      date: {
        seconds: seconds
      }
    }
  ]

  const output = [
    {
      tilContentText: 'text',
      postTimeText: '2015年8月25日 15:35'
    },
    {
      tilContentText: 'text',
      postTimeText: '2015年8月25日 15:35'
    }
  ]

  expect(addFormattedPostTime(input)).toEqual(output)
})

// UTCの時間に変換しないと、テストが落ちるので
// https://stackoverflow.com/questions/39223481/incorrect-date-shown-in-new-date-in-javascript
const convertDateToUTC = date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}
