import { format } from 'date-fns'

// TILを受け取り、dateTextを与えて返す処理。
export const addFormattedPostTime = TILs => {
  const TILWithDateText = TILs.map(til => {
    if (!(til && til.date && til.date.seconds)) return til
    // secondsなので、1000倍する
    const date = new Date(til.date.seconds * 1000)

    return {
      tilContentText: til.tilContentText,
      postTimeText: format(date, 'YYYY年M月D日 H:mm')
    }
  })

  return TILWithDateText
}
