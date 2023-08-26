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

// prototype function
type myFunc = (a:number, b:string) => void;

let write: myFunc = (num, str) => {
    console.log(num, str)
}

// either dark or light no other value
type UserWithTheme = {
	username: string, 
	age: number,
	phone?:string,
	theme: "dark" | "light"
}

const userWithTheme : UserWithTheme = {
	username: "Tejasvee",
	age: 23,
	theme: "dark"
	// theme: "pink"
}