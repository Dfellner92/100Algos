export function findEmailDomain(address: string): string {
  let slicer: number = address.lastIndexOf("@");
  return address.slice(slicer);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
