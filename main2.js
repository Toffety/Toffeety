
var colors = document.getElementById("colorsSelector");
var activeList= document.getElementsByClassName("colorItem--active");
var body = document.getElementsByTagName("body")[0];
var imgHolder = document.getElementById("imgHolder").getElementsByTagName("img")[0];

colors.addEventListener("click", changeColor)


// Функция Выбор цвета для авто
function changeColor(e){

    // удаление класса active предыдущего нажатия
    for (i = 0; i < activeList.length; i++){
        activeList[i].classList.remove("colorItem--active");}

        // Проверяем клик по элементам
    if (e.target.classList.contains("colorItem")) {

        // удаляем прощлое значения цвета класса body
        body.classList = "text-center";

        // Присваиваем класс active
        e.target.classList.add("colorItem--active");

        // Записываем значение класса с цветом
        var currentColor = e.target.classList[1];
        body.classList.add(currentColor);
        
        // Запуск функции смены картинки
        colorChange(currentColor);
    }

}
// Функция по смене картинки
function colorChange(currentColor){
    switch (currentColor){
        case "colorBlue":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/blue.png";break;
        case "colorWhite":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/white.png";break;
        case "colorRed":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/red.png";break;
        case "colorBlack":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/black.png";break;
        case "colorWhitePure":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/white-pure.png";break;
        case "colorOrange":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/orange.png";break;
        case "colorGraphite":
            imgHolder.src="https://webcademy.ru/files/js2020/solaris/graphite.png";break;
    }    
}

