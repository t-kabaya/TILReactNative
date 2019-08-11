import { addDateText } from './calcTilCardDateText'

test('must return dateText', () => {
  var date = new Date('2015-08-25T15:35:58.000Z')
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
      dateText: '2015年8月25日 15:35'
    },
    {
      tilContentText: 'text',
      dateText: '2015年8月25日 15:35'
    }
  ]

  expect(addDateText(input)).toEqual(output)
})
