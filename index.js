// Циклы основная работа с массивами, for of, for in, for самые используемые
// For ()описывается условия, {} точка,
// for () {} let = i, ++  суммирование+1
// i с использованием arr отображает циклы находящийся в массиве, если три обьекта, то отображение бкдет три раза, также нельзя вызвать функцию в цикле

// let arr = [1, 2, "Hello", true]

// for (let i = 0; i < arr.length; i++) {
// 	console.log(`Элемент -${arr[i]} - индекс элемента ${i}`)
// }

// цикл while за пв локальной области видимости,() внутри функции()
// используем когда не знаем сколько раз циклов

// let arr = [1, 2, "Hello", true]
// let i = 0;
// while (i <  arr.length) {
// 	console.log("Hello")
// 	i++
// }

// Do while
// let i = 500
// do {
// 	i++
// 	console.log("hello");
// } while (i < 1)

// Цикл For of (только для работы с массивами)
// let arr = [1, 2, "Hello", true]
// for (let iteArray of arr) {
// 	console.log(iteArray)
// }


// For in для работы с обьектами
// const obj = {
// 	name: "Ogogo",
// 	age: 2,
// }

// for (let i in obj) {
// 	console.log(obj[1 ])
// }
// метод push - добавление в конце обьекта, pop удаление в конце обьекта
// let arr = [1, 2, 3, 10, 12]

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 1) {
// 		arr[i] = 0
// 	}
// }
// arr.push("hello")
// console.log(arr)


// let arr = ['Hello', 'World', 'My', 'name', 'is', 'Danil']
// for (let itemArray of arr) {
// 	console.log(arr)
// }


// for (let = 0; < allNamePersonal.length; i++) {
// 	if (allNamePersonal[i] == 'Ivan' || allNamePersonal[i] == 'Oleg') {
// 		console.log(`${allNamePersonal[i]} Вы не приглашены`)
// 	}
// 	else {
// 		console.log(`${allNamePersonal} Вы приглашены`)
// 	}
// }

// let allNamePersonal = [
// 	'Misha',
// 	'Andrey',
// 	'Sasha',
// 	'Oleg',
// 	'Danil',
// 	'Dima',
// 	'Artur',
// 	'Ivan',
// 	'Slava',
// 	'Alisher',
// 	'Amiran',
// ]

// for (let i = 0; i < allNamePersonal.length; i++) {
// 	if (allNamePersonal[i] == 'Ivan' || allNamePersonal[i] == 'Oleg') {
// 		console.log(`${allNamePersonal[i]} к сожалению вы не приглашены`)
// 	}
// 	else {
// 		console.log(`${allNamePersonal[i]} вы приглашены`)
// 	}
// }


const objPersonal = [
	{
		name: 'Misha',
		age: 24,
		position: 'Frontend Developer',
		budget: '2300$',
	},
	{
		name: 'Andrey',
		age: 27,
		position: 'Data Analizi',
		budget: '2000$',
	},
	{
		name: 'Sasha',
		age: 32,
		position: 'QA',
		budget: '3200$',
	},
	{
		name: 'Oleg',
		age: 21,
		position: 'Frontend Developer',
		budget: '800$',
	},
	{
		name: 'Danil',
		age: 26,
		position: 'Frontend Developer',
		budget: '2000$',
	},
	{
		name: 'Dima',
		age: 29,
		position: 'Backend Developer',
		budget: '1700$',
	},
	{
		name: 'Artur',
		age: 24,
		position: 'Testing',
		budget: '500$',
	},
	{
		name: 'Ivan',
		age: 25,
		position: 'C++ Developer',
		budget: '1300$',
	},
	{
		name: 'Slava',
		age: 21,
		position: 'Qa Testing',
		budget: '1100$',
	},
	{
		name: 'Alisher',
		age: 22,
		position: 'Web Designer',
		budget: '1000$',
	},
	{
		name: 'Amiran',
		age: 26,
		position: 'Graph Designer',
		budget: '900$',
	},
]

let objPersonal = {

}