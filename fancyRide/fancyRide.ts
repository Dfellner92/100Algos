export function fancyRide(l: number, fares: number[]): string {
  const affordableRates: number[] = fares
    .map((fare) => fare * l)
    .filter((rideCost) => rideCost < 20);

  return affordableRates.length === 5
    ? "UberSUV"
    : affordableRates.length === 4
    ? "UberBlack"
    : affordableRates.length === 3
    ? "UberPlus"
    : affordableRates.length === 2
    ? "UberXL"
    : "UberX";
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
