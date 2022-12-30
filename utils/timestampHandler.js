// 월요일이 1부터이기에 앞에 채워준다.
const day = ["", "월", "화", "수", "목", "금", "토"]

export default function timeHandler(begin, end) {
  return `${day[Number(begin?.split("T")[0]?.split("-")[2])]}(${formatTime(
    new Date(begin.replace("1900", "2022"))
  )}-${formatTime(new Date(end.replace("1900", "2022")))})`
}

function formatTime(date) {
  var hh = date.getHours()
  hh = hh >= 10 ? hh : "0" + hh
  var mm = date.getMinutes()
  mm = mm >= 10 ? mm : "0" + mm
  return hh + ":" + mm
}
