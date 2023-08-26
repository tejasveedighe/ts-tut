// Interfaces

interface Person {
	name: string;
	age: number;
	phone?: string;
}

// same named interface will be merged as one
interface Person {
	martialStatus: string;
}

const person: Person = {
	name: "Tejasvee",
	age: 23,
	martialStatus: "married",
};

// interface can be extented and multiple type of interfaces can be created
interface User extends Person {
	username: string;
	userid: number;
}

type Employee = {
	employeeId: number;
	field: string;
};

// interface can extend type but not vice-versa
interface User extends Employee {
	isAdmin: boolean;
}
