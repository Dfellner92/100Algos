export function lateRide(n: number): number {
  let hours: number = Math.floor(n / 60);
  let minutes: number = n % 60;
  let sum: number = 0;

  let stringedHours: string[] = String(hours).split("");
  let stringedMinutes: string[] = String(minutes).split("");

  stringedHours.forEach((num) => (sum += Number(num)));
  stringedMinutes.forEach((num) => (sum += Number(num)));

  return sum;
}

console.log(lateRide(240));
console.log(lateRide(808));
