export default function thousandsSeparator(target) {
  return target?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}
