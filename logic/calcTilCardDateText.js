import { format } from 'date-fns'
import isToday from 'date-fns/is_today'
import isYesterday from 'date-fns/is_yesterday'

// TILを受け取り、dateTextを与えて返す処理。
export const addFormattedPostTime = TILs => {
  const TILWithDateText = TILs.map(til => {
    if (!(til && til.date && til.date.seconds)) return til
    // secondsなので、1000倍する
    const date = new Date(til.date.seconds * 1000)

    let postTimeText = null
    isToday(date)

    if (isToday(date)) {
      postTimeText = format(date, '今日　H:mm')
    } else if (isYesterday(date)) {
      postTimeText = format(date, '昨日 H:mm')
    } else {
      postTimeText = format(date, 'YYYY年M月D日 H:mm')
    }

    return {
      tilContentText: til.tilContentText,
      postTimeText
    }
  })

  return TILWithDateText
}
