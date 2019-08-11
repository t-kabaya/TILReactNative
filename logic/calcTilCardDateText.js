// TILを受け取り、dateTextを与えて返す処理。
export const addDateText = TILs => {
  const TILWithDateText = TILs.map(til => ({
    tilContentText: til.tilContentText
  }))

  return TILWithDateText
}
