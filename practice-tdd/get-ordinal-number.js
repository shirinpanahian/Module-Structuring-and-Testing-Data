export function getOrdinalNumber(num) {
  if (num % 100 === 11) {
    throw new Error("Input must not ending with 11");
  }
  if (num % 10 === 1) {
    return `${num}st`;
  }

  if (num % 100 === 22) {
    throw new Error("Input must not ending with 22");
  }

  if (num % 10 === 2) {
    return `${num}nd`;
  }
  if (num % 100 === 33) {
    throw new Error("Input must not ending with 33");
  }

  if (num % 10 === 3) {
    return `${num}rd`;
  }

  return `${num}th`;
}
