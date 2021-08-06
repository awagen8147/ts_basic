export default function typeAliasSample() {
	// 型エイリアス
	type Country = {
		capital: string
		language: string
		name: string
	}

	const japan: Country = {
		capital: 'Tokyo',
		language: 'Japanese',
		name: 'Japan'
	}
	console.log("Object alias sample 1:", japan)
	
	const america: Country = {
		capital: 'Washington, D.C.',
		language: 'English',
		name: 'United States of America'
	}
	console.log("Object alias sample 2:", america)

	// 合併型(union)と交差型(intersection)
	type Knight = {
		hp: number
		sp: number
		wepon: string
		swordSkill: String
	}

	type Wizard = {
		hp: number
		mp: number
		wepon: string
		magicSkill: string
	}

	// 合併型 (union)
	type Adventurer = Knight | Wizard

	// 交差型 (intersection)
	type Paladin = Knight & Wizard

	// Knight寄りの冒険者
	const adventurer1: Adventurer = {
		hp: 100,
		sp: 30,
		wepon: '木の剣',
		swordSkill: '三連斬り'
	}

	// Wizard寄りの冒険者
	const advenrurer2: Adventurer = {
		hp: 100,
		mp: 30,
		wepon: '木の杖',
		magicSkill: 'ファイヤーボール'
	}

	const paladin: Paladin = {
		hp: 300,
		sp: 100,
		mp: 100,
		wepon: '銀の剣',
		swordSkill: '欄連斬り',
		magicSkill: 'ファイヤーボール'
	}


}
