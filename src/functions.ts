function stringFunc(): string {
  return "Chuoi bat ky";
}

function numberFunc(): number {
  return 123456;
}

function stringArrFunc(): string[] {
  return ["Mot", "Hai", "Ba"];
}

function numberArrFunc(): number[] {
  return [1,2,3];
}

function anyFunc(): any {
  return {
    childObj: {
      grandChilObj: {

      }
    }
  };
}

function hello(name: string, age: number): string {
  return "Xin chao " + name + " co phai ong " + age + " tuoi khong?";
}
console.log(hello("Minh", 50));

//cach khac
var helloOther: (name: string, age: number) => string = function(name, age) {
  return "Xin chao " + name + ", co phai ong " + age + " tuoi khong?";
}
console.log(helloOther("Danh", 23));

//Ham co gia tri mac dinh
function cong(x: number = 25, y: number = 75): number {
  return x + y;
}
console.log(cong());

//Ham co doi so tuy chon
function tuyChon(x: string, y?: number): any {
  if (y) {
    return y;
  }
  return x;
}
console.log(tuyChon("Hello"));
console.log(tuyChon("Hello", 9999));
