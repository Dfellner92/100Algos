export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  let day: number = 0;
  let height: number = 0;
  while (height < desiredHeight) {
    height += upSpeed;
    if (height > desiredHeight) {
      return day;
    }
    height -= downSpeed;
    day++;
  }
  return day;
}

console.log(growingPlant(100, 10, 910));
