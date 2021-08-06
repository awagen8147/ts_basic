export default function genericsAdvancedSample() {
	type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

	const mapStringToNumbers: Map<string, number> = (array, fn) => {
		const result: number[] = []
		for (let i = 0; i < array.length; i++) {
			result[i] = fn(array[i])
		}
		return result
	}
	
	const numbers = mapStringToNumbers(['123', '456', '001'], (item) => Number(item))
	console.log('Generics advanced sample 1:', numbers)
	
	const mapNumbersToStrings: Map<number, string> = (array, fn) => {
		const result: string[] = []
		for (let i = 0; i < array.length; i++) {
			result[i] = fn(array[i])
		}
		return result
	}
	
	const strings = mapNumbersToStrings(numbers, (item) => String(item))
	console.log('Generics advanced sample 2:', strings)
}