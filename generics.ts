// Generics
interface IAuthor {
	id: number;
	name: string;
}

interface ICategory {
	id: number;
	title: string;
}

interface IPost {
	id: number;
	title: string;
	desc: string;
	extra: IAuthor[] | ICategory[];
}

// type can be replaced with any literal and now this interface is generic with extra key it can accept any type
interface IPostBetter<type> {
	id: number;
	title: string;
	desc: string;
	extra: type[];
}

const test: IPostBetter<String | Number> = {
	id: 1,
	title: "title post",
	desc: "description of post",
	extra: ["abc", "def", 1],
};

// generic interface with limitations to the type of data
interface IPostBetter2<T extends object> {
	id: number;
	title: string;
	desc: string;
	extra: T[];
}

// cannot pass string it will be an object that it accepts
// const testMe: IPostBetter2<string> = {
// 	id: 1,
// 	title: "pst title",
// 	desc: "post desc",
// 	extra: "asd",
// };

const testMe2: IPostBetter2<ICategory> = {
	id: 1,
	title: "poist",
	desc: "asd",
	extra: [{ id: 1, title: "asd" }],
};
