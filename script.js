function Cars(mark, type, model, speed, weight, color, places, amount, fuel, cons) {
    this.mark = mark;
    this.type = type;
    this.model = model;
    this.speed = speed;
    this.weight = weight;
    this.color = color;
    this.places = places;
    this.amount = amount;
    this.fuel = fuel;
    this.cons = cons;
    this.getInfo = function() {
        document.write('Марка: ' + this.mark + '<br>');
        document.write('Тип: ' + this.type + '<br>');
        document.write('Модель: ' + this.model + '<br>');
        document.write('Скорость: ' + this.speed + '<br>');
        document.write('Масса: ' + this.weight + '<br>');
        document.write('Цвет: ' + this.color + '<br>');
        document.write('Мест: ' + this.places + '<br>');
        document.write('Обьем: ' + this.amount + '<br>');
        document.write('Горючее: ' + this.fuel + '<br>');
        document.write('Расход: ' + this.cons + '<br>');
        document.write('Максимальное расстояние на полном баке: ' + Math.round(parseFloat(amount) / parseFloat(cons) * 100) + ' км');
    }
}

function colorCar() {
    var colour = prompt("Введите цвет машины : silver, red, blue, black");
    var mas = [Lada, Opel, Renault, Subaru, Toyota]
    var carColor = "";
    for (var i = 0; i < mas.length; i++) {
        if (mas[i].color == colour) {
            carColor += mas[i].mark + ' ';
        }
    }
    alert(carColor);
}

function allInfo() {
    var car = prompt("Выберите марку автомобиля: Lada, Opel, Renault, Subaru, Toyota");
    switch (car) {
        case 'Lada':
            Lada.getInfo();
            break;
        case 'Opel':
            Opel.getInfo();
            break;
        case 'Renault':
            Renault.getInfo();
            break;
        case 'Subaru':
            Subaru.getInfo();
            break;
        case 'Toyota':
            Toyota.getinfo();
            break;
        default:
            alert('такой марки не существует');
    }
};
var Lada = new Cars('Lada', 'Hatchback', 'Kalina', '160km/hour', 1000, 'red', 4, '50L', 'benzin', '5L/100km');
var Opel = new Cars('Opel', 'Miniven', 'Zafira', '240km/hour', 1500, 'silver', 5, '60L', 'benzin', '6L/100km');
var Renault = new Cars('Renault', 'Sedan', 'Megan', '220km/hour', 1300, 'red', 4, '60L', 'gaz', '5.5L/100km');
var Subaru = new Cars('Subaru', 'Jeep', 'Forester', '260km/hour', 2000, 'black', 5, '70L', 'benzin', '8L/100km');
var Toyota = new Cars('Toyota', 'Sedan', 'Corolla', '280km/hours', 1800, 'silver', 4, '60L', 'benzin', '7L/100km');

colorCar();
allInfo();