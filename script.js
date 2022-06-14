"use strict"

/*
const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");


inputRub.addEventListener("input",()=>{     
    const request = new XMLHttpRequest(); // создали новый обьект (конструктор)

    request.open("GET","current.json"); // это методы обьекта иксэмельХТТПреквест (метод собирает настройки которые поомгут сделать запрос)
    // request.open(GET POST , путь к файлу юрл, асинхронность, логин , пароль) - примеры
    request.setRequestHeader("Content-type", "application/json; charset=utf-8"); // - тип контента , какой тип , кодировка

    request.send(); // - отправили запрос (в скобках будет body при HTTP методе post)
    
    // Вариант 1 
    
    request.addEventListener("readystatechange", ()=>{
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    })
    
    // Вариант 2 (проще)
    request.addEventListener("load", ()=>{
          if(request.status === 200){
              const data = JSON.parse(request.response);
              inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
          } else {
              console.log(inputUsd.value = "Что то пошло не так")
          }
    });

    });

    // Свойства обьекта XMLHTTPREQUEST
    // status  - показывает статус запроса (404 и тд)
    // statusText - текстовое описание ответа от сервера (ok not found и тд)
    // response - ответ от сервера (лежит ответ который зада бекенд разраб)
    // readyState - текущее состояние запроса (цифра или слово (5 вариантов))

    // События которые относятся к обьекту ХТТП

    // readystatechange - событие отслеживает статус готовности нашего запроса в данный момент
    // load - срабатывает когда запрос полностью загрузился и мы получили результат


    */



// FETCH - ПРИМЕР-----------------------------------

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    fetch("current.json")
        .then(data => data.json())
        .then(data => {
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2)
        }).catch(() => {
            inputUsd.value = "Ошибка!"
        })
})

inputUsd.addEventListener("input", () => {
    fetch("current.json")
        .then(data => data.json())
        .then(data => {
            inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2)
        }).catch(() => {
            inputUsd.value = "Ошибка!"
        })
})