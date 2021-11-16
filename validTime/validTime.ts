export function validTime(time: string): boolean {
  const [hours, minutes] = time.split(":");
  let hour: number = parseInt(time.slice(0, 2));
  let minute: number = parseInt(time.slice(3, 5));
  return hour < 25 && minute < 60;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
