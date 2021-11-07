export function pigLatin(str: string): string {
    const vowelRegex = /[aeiou]/ig;
    
    if (str[0].match(vowelRegex)) {
      return str.concat("way");
    } else {
      for (let i = 0; i < str.length; i++) {
        if (str[i].match(vowelRegex)) {
          return str.slice(i).concat(str.slice(0, i) + "ay");
        }
      }
    }
  }
  
  console.log(pigLatin("glove"));
  console.log(pigLatin("eight"));
  console.log(pigLatin("bright"))
  