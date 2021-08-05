export default function primitiveSample() {
	// console.log("Foo")
	let name: string = 'トラハック'
	// name = 123
	console.log("primitive sample 1:", typeof name, name)

	let age: number = 28
	console.log("primitive sample 2:", typeof age, age)
	
	let isSingle: boolean = true
	console.log("primitive sample 3:", typeof isSingle, isSingle)

	const siOver20: boolean = age >= 20
	console.log("primitive sample 4:", typeof siOver20, siOver20)
}