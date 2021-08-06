export default function genericsBasicSample() {
	// ジェネリック型を使わない場合
	const stringReduce = (array: string[], initialValue: string): string => {
		let result = initialValue
		for (let i=0; i < array.length; i++) {
			result += array[i]
		}
		return result
	}
	console.log("Generics basic sample 1:", stringReduce(['a', 'b'], ''))
	
	const numberReduce = (array: number[], initialValue: number): number => {
		let result = initialValue
		for (let i=0; i < array.length; i++) {
			result += array[i]
		}
		return result
	}
	console.log("Generics basic sample 2:", numberReduce([1, 2], 0))

	// ジェネリック型を使う場合
	type GenericReduce<T> = {
		(array: T[], initialValue: T): T
	}
	type GenericReduce2<T> = (array: T[], initialValue: T) => T

	const GenericStringReduce: GenericReduce<string> = (array: string[], initialValue: string): string => {
		let result = initialValue
		for (let i=0; i < array.length; i++) {
			result += array[i]
		}
		return result
	}
	const GenericNumberReduce: GenericReduce<number> = (array: number[], initialValue: number): number => {
		let result = initialValue
		for (let i=0; i < array.length; i++) {
			result += array[i]
		}
		return result
	}
}