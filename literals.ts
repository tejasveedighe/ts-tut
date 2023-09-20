const first: "hello" = "hello";
const second: "hi" = "hi";

type name = "tejasvee";
type last = "dighe";

type full = `${name}-${last}`;
const myName: full = "tejasvee-dighe";

function compare(a: string, b: string): -1 | 0 | 1 {
	return a === b ? 0 : a > b ? 1 : -1;
}
