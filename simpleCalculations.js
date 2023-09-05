// Problem 1
var tNumber = 3;
var tCost = 14

document.getElementById("ticketNum").innerHTML += tNumber;
document.getElementById("ticketCost").innerHTML += tCost;
document.getElementById("ttCost").innerHTML += tNumber * tCost;

// Problem 2
var bank = 235.87;
var cShirt = 35;
var cPants = 75;
var cShoes = 60;
var cJacket = 70;

document.getElementById("bank").innerHTML += bank - cShirt - cShoes - cPants;

document.getElementById("addJacket").innerHTML += bank>cShirt + cShoes + cPants + cJacket;

// Problem 3
var tPizza = 4;
var studCon = 2.5;
var slices = 8;
var tSlices = tPizza * slices;

document.getElementById("profPizza").innerHTML = "Students: " + Math.floor(tSlices / studCon) + " Left Over: " + Math.floor(tSlices - Math.floor(tSlices / studCon) * studCon);

// Problem 4
var cAdult = 12;
var cChild = 6;
var cDrink = 1.5;

var aBuffet = 2;
var cBuffet = 1;
var drinks = 3;

var tCost = aBuffet * cAdult + cBuffet * cChild + drinks * cDrink;

document.getElementById("Monty").innerHTML = "$" + tCost;

// Problem 5
var w1Tips = 202.45;
var w2Tips = 134.97;
var w3Tips = 256.63;
var w4Tips = 178.22;

var avg = (w1Tips + w2Tips +w3Tips +w4Tips) / 4;

document.getElementById("tips").innerHTML = "$" + avg;