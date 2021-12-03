export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {  
    for (const pass of attempts) {
      if (pass === passcode) {
        return true;
      }
    }
    return false;
  }
  

// console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));