export default function getDateRange(startDate, endDate) {
  let dateMove = new Date(startDate)
  let strDate = startDate
  let listDate = []

  if (startDate == endDate) {
    let strDate = dateMove.toISOString().slice(0, 10)
    listDate.push(strDate.slice(5, 10).replace("-", "/"))
  } else {
    while (strDate < endDate) {
      strDate = dateMove.toISOString().slice(0, 10)
      listDate.push(strDate.slice(5, 10).replace("-", "/"))
      dateMove.setDate(dateMove.getDate() + 1)
    }
  }

  return listDate
}
