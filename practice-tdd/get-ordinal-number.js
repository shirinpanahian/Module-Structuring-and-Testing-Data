export function getOrdinalNumber(num) {
  if (num % 100 === 11) {
    throw new Error("Input must not ending with 11");
  }
  if (num % 10 === 1) {
    return `${num}st`;
  }
}
