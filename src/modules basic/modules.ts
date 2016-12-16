console.log('------Modules Basic------');
module MNH {
  export class String {
    str: string;
    constructor(str: string = '' ) {
      this.str = str;
    }
    uppercase(str: string = this.str): string {
      return str.toUpperCase();
    }
    lowercase(str: string = this.str): string {
      return str.toLowerCase();
    }
    random(subStr: number = 6): string {
      return Math.random().toString(36).substring(subStr);
    }
  }

  export class Number {
    plus(numb_1: number = 0, numb_2: number = 0): number {
      return numb_1 + numb_2;
    }
    minus(numb_1: number = 0, numb_2: number = 0): number {
      return numb_1 - numb_2;
    }
    add(numb_1: number = 0, numb_2: number = 0): number {
      return numb_1 * numb_2;
    }
    divide(numb_1: number = 0, numb_2: number = 0): number {
      return numb_1 / numb_2;
    }
    modulus(numb_1: number = 0, numb_2: number = 0): number {
      return numb_1 % numb_2;
    }
    random(start: number = 0, end: number = 10): number {
      return Math.floor((Math.random() * end) + start);
    }
  }
}

var str = new MNH.String();
var numb = new MNH.Number();
console.log('-----String-----');
console.log(str.uppercase('dangdongminh'));
console.log(str.lowercase('dangdongminh'));
console.log(str.random(4));
console.log('-----Number-----');
console.log(numb.plus(100,5));
console.log(numb.minus(100,5));
console.log(numb.add(100,5));
console.log(numb.divide(100,5));
console.log(numb.modulus(100,5));
console.log(numb.random(100,5000));
