/* types are name for a custom type */

type MyType = {
	x: number;
	y: number;
};

function printCoord(pt: MyType) {
	console.log("X Coord - ", pt.x);
	console.log("Y Coord - ", pt.y);
}

printCoord({ x: 100, y: 200 });

// exteding the same type

type A = {
	x: number;
};

type extendedA = A & {
	y: number;
};
