//checking if a number is big 

const controleAge = function (leeftijd) {

    if (leeftijd >= 100) {
        return true;
    }
    return false;
}

console.log(controleAge(30));
console.log(controleAge(130));

// bouncer at a club

const controleBrenda = function (bezoekers, leeftijd) {
    if (bezoekers >= 150, leeftijd >= 18) {
        return "it's too busy now, come back later";
    } else if (bezoekers >= 150, leeftijd <= 17) {
        return "this is a club for adults";
    } else {
        return "come in";
    }
}


console.log(controleBrenda(150, 16));
console.log(controleBrenda(150, 20));
console.log(controleBrenda(80, 14));

// Calculate the average 

const calculateAverage = function (numbers) {
    const average = numbers;
    return average;
}

const result1 = calculateAverage([4, 6, 5, 4, 2]);
console.log(result1)


