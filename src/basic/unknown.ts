export default function unknownSample() {
	const maybyNumber: unknown = 10
	console.log("unknown sample 1:", typeof maybyNumber, maybyNumber)

	const isFoo = maybyNumber === "foo"
	console.log("unknown sample 2:", typeof isFoo, isFoo)

	if (typeof maybyNumber === 'number') {
		const sum = maybyNumber + 10
		console.log("unknown sample 3:", typeof sum, sum)
	}
}