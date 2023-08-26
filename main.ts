let num : number = 10;
let str: string = "string"
let numOrString: number | string = "tejasvee"

let numArr: number[]
let strArr: string[]

// Union
let strOrNumArr: (string | number)[]
strOrNumArr = [1, "string", 2]

// Objects
let user = {
    username: "john",
    age: 22,
    isAdmin: false
}

let userObject : {
    username: string,
    age: number,
    isAdmin: boolean,
    // phone property is not required
    phone?: string 
}

// all the keys are required to use except the phone one
userObject = {
    username: "John",
    age: 12,
    isAdmin: true
}
