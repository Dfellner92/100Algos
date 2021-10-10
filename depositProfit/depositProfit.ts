export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let year = 0;
  let depositGrowth = deposit;
  while (depositGrowth < threshold) {
    depositGrowth = depositGrowth += (depositGrowth * rate) / 100;
    year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));
