import React from "react";

let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
	name: string;
	age?: number;
};

let person: Person = {
	name: "Hey",
};

let printName: (name: string) => void;

let persons: Person[] = new Array();
persons.push(person);

function App() {
	return <div className="App">Hello World</div>;
}

export default App;
