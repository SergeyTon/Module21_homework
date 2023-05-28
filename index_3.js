// Получение данных в localStorage
let myKey = localStorage.getItem('myKey');

// Если localStorage пуст
if (myKey === null) {
    var usrName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
    var curDate = new Date();

    //JSON 
    const jsonString = `{
    "name": "${usrName}",
    "date": "${curDate}"
  }`;
    //Запись в localStorage
    localStorage.setItem('myKey', jsonString);
} else {
    //Вызываем из localStorage и получаем объект
    localStorage.getItem('myKey');
    const jsonKey = localStorage.getItem('myKey');
    console.log('jsonKey', jsonKey);
    myKey = JSON.parse(jsonKey);

    alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были   у нас ${myKey.date}`);

    //JSON для перезаписи
    const jsonString = `
  {
    "name": "${myKey.name}",
    "date": "${new Date()}"
  }`;

    //Перезапись localStorage
    localStorage.setItem('myKey', jsonString);
}
// localStorage.clear() //обнуляем localStorage