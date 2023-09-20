// you can ASSERT what type of data will be used in some part of code
let myCanvas = document.getElementById("canvas") as HTMLCanvasElement;
// or
myCanvas = <HTMLCanvasElement>document.getElementById("canvas");
