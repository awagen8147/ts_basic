export default function tupleSample() {
	// 一般的なタプルの型定義
	let response: [number, string] = [200, 'OK']
	// response = [400, 'a', 'b']
	// response = ['a']
	console.log('Array tuple sample 1:', response)
	
	// 可変長引数を使ったタプル
	const girlFriends: [string, ...string[]] = ['kana', 'miku', 'keiko']
	girlFriends.push('misa')
	console.log('Array tuple sample 2:', girlFriends)

	// イミュータブルな配列
	const commands: readonly string[] = ['a', 'b', 'c']
	const numbers: ReadonlyArray<number> = [1, 2, 3]
	const names: Readonly<string[]> = ['a', 'b', 'c']

}