// Functions

let sayHi = () => {
	console.log("Hi, Welcome");
};

// return type of function
let returnTypeFunction: Function = (): string => {
	return "lama dev";
};

let argumentTypeFunction: Function = (num: Number): void => {
	console.log(num);
};

let functionWithUnkownNumberOfArgs = (
	num1: number,
	num2: number,
	another?: any
): void => {
	console.log(num1 + num2);
};

let func = (user: { username: string; age: number; phone?: string }) => {
	console.log(user.username);
};

// Type Aliases
type UserType = {
	username: string;
	age: number;
	phone: string;
};

let func2 = (user: UserType): void => {
	console.log(user.username);
};
