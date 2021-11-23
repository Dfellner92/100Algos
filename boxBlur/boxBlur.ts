export function boxBlur(image: number[][]): number[][] {
  return [
    [
      Math.floor(
        (image[0][0] +
          image[0][1] +
          image[0][2] +
          image[1][0] +
          image[1][1] +
          image[1][2] +
          image[2][0] +
          image[2][1] +
          image[2][2]) /
          9
      ),
    ],
  ];
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
