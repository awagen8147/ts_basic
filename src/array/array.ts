export default function arraySample() {
	// シンプルな配列の型定義
	const colors: string[] = ['red', 'yellow']
	colors.push('white')
	colors[4] = 'blue'
	console.log('Array array sample:1', colors)
	
	const even: Array<number> = [2,4,6]
	even.push(3)
	
	const ids: (string | number)[] = ["ABC", 123]
	ids.push(456)
	ids.push("DEF")
	console.log('Array array sample:2', ids)

	// 配列の型推論
	const generateSomeArray = () => {
		const _someArray = []
		_someArray.push(123)
		_someArray.push('ABC')
		return _someArray
	}

	const someArray = generateSomeArray()
	someArray.push(456)
}