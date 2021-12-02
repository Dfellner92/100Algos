export function firstNotRepeatingCharacter(s: string): any {
    let hashMap: object = {};
    
    s.split('').forEach((letter) => hashMap.hasOwnProperty(letter) ? hashMap[letter] = hashMap[letter] + 1 : hashMap[letter] = 1)
    
    for (const key in hashMap) {
      if (hashMap[key] === 1) {
        return key;
      }
    }
     return "_";
  }
  
  console.log(firstNotRepeatingCharacter('abacabad'));
  console.log(firstNotRepeatingCharacter('abacabaabacaba'));