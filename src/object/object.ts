export default function objectSample() {
	const a: object = {
		name: 'Trahack',
		age: 28
	}
	// a.name

	// オブジェクトリテラル記法で型定義
	let country: {
		language: string
		name: string
	} = {
		language: "Japanese",
		name: "Japan"
	}

	console.log("Object object sample 1:", country)

	country = {
		language: "English",
		name: "United States of America"
	}

	console.log("Object object sample 2:", country)
	
	// オプショナルとreadonly
	const torahack: {
		age: number
		lastName: string
		readonly firstName: string
		gender?: string
	} = {
		age: 28,
		lastName: "Yamada",
		firstName: "Tarou",
	}
	
	console.log("Object object sample 3:", torahack)
	
	torahack.gender = 'male'
	torahack.lastName = 'Kamado'
	// torahack.firstName = 'Tanjiro'
	
	// インデックスシグネチャ
	const capitals: {
		[countryName: string]: string
	} = {
		Japan: 'Tokyo',
		Korea: 'Seoul'
	}
	
	capitals.China = 'Beijing'
	capitals.Canada = 'Otawa'

	console.log("Object object sample 4:", capitals)
}