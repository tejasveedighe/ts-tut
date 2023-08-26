// Number
let num: number = 10;

// String
let str: string = "string";

// Number or String
let numOrString: number | string = "tejasvee";

// Array with type
let numArr: number[];
let strArr: string[];

// Union string or number
let strOrNumArr: (string | number)[];
strOrNumArr = [1, "string", 2];

// Objects
let userObject: {
	username: string;
	age: number;
	isAdmin: boolean;
	// phone property is not required
	phone?: string;
};

// all the keys are required to use except the phone one
userObject = {
	username: "John",
	age: 12,
	isAdmin: true,
};

// any
let testAny: any;
// this also works let test;

testAny = 12;
testAny = "treu";
testAny = true;
testAny = [12, "asd", true];
testAny = {};

let testAnyArray: any[];
