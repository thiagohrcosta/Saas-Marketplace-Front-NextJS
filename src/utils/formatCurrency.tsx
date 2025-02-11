
export function FormatCurrency(value: number) {
  const valueToFormat = value / 100;
  return valueToFormat.toFixed(2)
}