// my solution

export const candies = (n: number, m: number): number => {
  return m - (m % n);
};

// console.log(candies(3, 10));

// dylan's solution

export const candies2 = (n: number, m: number): number => {
  const candy = Math.floor(m / n);
  return candy * n;
};

// my solution might not be descriptive enough