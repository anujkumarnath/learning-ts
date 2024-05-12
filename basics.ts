/* NOTE: lsp should be configured to see intentional errors in this file*/
/* Start: Types by inference */
const helloWorld = "Hello World";
const num = 10;
/* End: Types by inference */

/* Start: Defining types */
/* Start: interface */
interface User {
	name: string; // note: small letter. why?
	id: number;
}

const user1: User = {
	name: 'hello',
	id: 12,
}

const user2: User = {
	username: "Hayes",
	id: 0,
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user: User = new UserAccount("Murphy", 1);

/* Parameters  of functions */
function deleteUser(user: User) {}

/* Return value  of function */
function getAdminUser(): User {}
/* End: interface */

/* Start: Unions */
type MyBool = true | false;
type LockStates = 'locked' | 'unlocked';
const bool: MyBool = 0;
const state: LockStates = 'available';

/* accepts string or array of strings */
function getLegth(obj: string | string[]) {
	return obj.length;
}

/* Returning different values depending on input type type */
function wrapInArray(obj: string | string[]) {
	if (typeof obj === 'string')
		return [obj];

	return obj;
}
/* End: Unions */

/* Start: Generics */
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const arr: ObjectWithNameArray = []; 
arr.push({ name: "anuj" });

const arr2: StringArray = ['12', 12, 9];
const arr3: ObjectWithNameArray = [{ id: 0 }];

/* interface with generic */
interface Backpack<MyType> {
	add: (obj: MyType) => void;
	get: () => MyType;
}

/* declaring a const with a generic type */
declare const backpack: Backpack<string>;
const obj = backpack.get();

backpack.add(23);

/* Duck-typing or structural typing:
 * TypeScript compares shape in type-check even if explicitly specified */
interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}

/* point is not explicitly defined to be of type Point */
const point = { x: 12, y: 26 };
/* still accepted by the function */
logPoint(point);

/* Duck-typing requires a subset to match */
/* extra z is allowed */
const point2 = { x: 12, y: 26, z: 89 };
logPoint(point2);

/* extra widtha and height don't causes error */
const rect = { x: 33, y: 13, width: 30, height: 80 };
logPoint(rect);

/* missing y value causes error */
const color = { x: 10, hex: "#187ABF" };
logPoint(color);


/* classes also conform to shapes */
class VirtualPoint {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const newPoint = new VirtualPoint(12, 14);
/* works */
logPoint(newPoint);
/* End: Generics */
/* End: Defining types */
