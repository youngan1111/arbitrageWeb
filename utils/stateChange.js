export default function stateChange(state) {
  return state == "in" ? "재학" : state == "out" ? "자퇴" : "휴학"
}
