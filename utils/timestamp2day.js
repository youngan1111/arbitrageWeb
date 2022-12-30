// 월요일이 1부터이기에 앞에 채워준다.
const day = [
  "",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

export default function timestamp2day(timestamp) {
  return day[Number(timestamp.split("T")[0].split("-")[2])]
}
