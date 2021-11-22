export function stringsConstruction(a: string, b: string): any {
  let stringMap: object = {};
  let propertyArray: number[] = [];

  for (let i = 0; i < a.length; i++) {
    stringMap[a[i]] = 0;
  }
  for (let j = 0; j < b.length; j++) {
    if (stringMap.hasOwnProperty(b[j])) {
      stringMap[b[j]] = stringMap[b[j]] + 1;
    }
  }
  for (const property in stringMap) {
    propertyArray.push(stringMap[property]);
  }
  propertyArray.sort();
  return propertyArray[0];
}
console.log(stringsConstruction("abc", "abccba"));
