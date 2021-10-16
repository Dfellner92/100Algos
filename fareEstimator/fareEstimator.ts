function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  let rideFares: number[] = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    let rideFare: number =
      ride_distance * cost_per_mile[i] + ride_time * cost_per_minute[i];
    rideFares.push(Math.round(rideFare * 10) / 10);
  }
  return rideFares;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
