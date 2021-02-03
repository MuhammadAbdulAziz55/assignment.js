//  https://github.com/MuhammadAbdulAziz55/assignment.js

// Problem-1:
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var output= kilometerToMeter(5);

// Problem-2:
function budgetCalculator(watch, phone, laptop){
    var watchPrice= watch * 50;
    var phonePrice= phone * 100;
    var laptopPrice= laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(2,3,4);

// Problem-3:
function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstPart = 10 * 100;
        var remaning = days - 10;
        var secondPart = remaning * (100 - 20);
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * (100 - 20);
        var remaning = days - 20;
        thirdPart = remaning * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(30);

// Problem-4
function megaFriend(name){
    var longestName = '';
    for(var i = 0; i < name.length; i++ ){
        if(name[i].length > longestName){
            longestName = name[i];
        }
    }
    return longestName;
}
var longestName = megaFriend(['Abdul Aziz', 'Arafat', 'Safa']);








