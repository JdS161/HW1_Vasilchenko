//Task_1
// Создать переменную «возраст» человека и определить, является ли он совершеннолетним (>18).

console.log("Task 1:");
const age = prompt("Enter some age:");
if (age>=18)
{
    alert("Adult");    
}
else
{
    alert("Minor");
}

//Task_2
// Создать переменную «год» и проверить, високосный он или нет. Високосный год либо кратен 400, 
// либо кратен 4 и при этом не кратен 100.

console.log("Task 2");
const year = prompt("Enter some year:");
if (year%400==0 || (year%4==0 && year%100!=0))
{
    alert(year + " is leap year");    
}
else
{
    alert(year + " is non-leap year");
}

// Task_3:
// Создать  переменную «сумма покупки» и вывести сумму к оплате со скидкой: более 1000 – скидка 5%.

console.log("Task 3");
const amount = prompt("Enter total amount of the purchase:");
if (amount >= 1000)
{
    alert("Resulting price = " + amount * 0.95 + "\nDiscount - 5%");
}
else
{
    alert("Resulting price = " + amount + "\nNo discount");
}


// Task_4:

// Создать две переменные : «длина окружности» и «периметр квадрата». 
// Определить, может ли такая окружность поместиться в указанный квадрат.

console.log("Task 4");
const circ_len = prompt("Enter circle length:");
const sqr_per = prompt("Enter square perimeter:");

const circ_diam = 2*(circ_len/(2 * Math.PI));

if(circ_diam <= (sqr_per/4))
{
    alert("Circle with such length CAN be placed inside such square");
}
else
{
    alert("Circle with such length CAN NOT be placed inside such square")
}