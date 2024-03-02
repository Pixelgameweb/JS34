// 1 задание
const cityList = document.querySelectorAll('ul li');// Создаем констату и даем ей значение ul(точнее его элементов li);
let cities = []; //Создаем переменную cities и недаем ей никакого значения

cityList.forEach(city => {// С помощью Свойства ForEach выполняем push(push - это команда для записи значений в конец данных) для всех элементов списка ul (1 строка)
  cities.push(city.textContent);
});

const citiesJSON = JSON.stringify({ cities });//Создаем констату citiesJSON и присваеваем ей значения переведенной переменной cities(Переведенной из Json d JavaScript)
console.log(citiesJSON);// Выводим в консоль citiesJSON
/*************************************************/
// 2 задание


let json2 = '["user1","user2","user3","user4","user5"]'; // Создаем переменную json со значениями user1, user2, user3, user4, user5
let parsedJson = JSON.parse(json2);// Создаем переменную parsedJson и присваеваем ей значение переведенного из данных JSON в данные JavaScript

parsedJson.push("user6");//Перезаписываем переменную parsedJson добавляя туда user6 при том не удаляя предыдущие записи

console.log(parsedJson);//Выводим в консоль значение переменной parsedJson
/************************************************ */
// 3 задание

// Ну тут все просто. Мы сначала создаем потом записываем в переменную json элементы. По типу   "name": "user1","age": 25, "salary": 1000
let json3 = `[     
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
    {
		"name": "user4",
		"age": 28,
		"salary": 4000
	}
]`;


//----------------------------------------------------------------------------------------------------//
// 4 задание

let json4 = '["user1","user2","user3","user4","user5"]'; // Создаем пересенную json и записываем в нее элементы: uaer1, user2. user3. user4. user5 
let users = JSON.parse(json4);// Создаем пересенную users и записываем в нее результат свойств команды JSON.parse(эта команда переводит значения переменной json из данных JSON в данные JavaScript )

console.log('<ul>');// Записываем в документ команду <ul>(команда создает список Html ) 
users.forEach(user => {  //С помошью свойства команды ForEach(эта команда перебирает все элементы находящиеся в констате или переменной и выполняет то чот написано ниже в фигурных скобочках) мы приписываем всем элементам переменной json(а это user1 user2 user3 user4 user5)  <li> - что соответствует правилам написания  списков в Html 
console.log(`<li>${user}</li>`);
});

//  Вроде все обьяснил



