/*************************************************
 *     EXERCICE XP-GOLD
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/
/* 

/* 
|Exercise 1 : Checking The BMI
|-------------------------------
|You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
|Create two objects, each object should hold a person’s details. Here are the details:
|FullName,Mass,Height
|Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
|Outside of the objects, create a JS function that compares the BMI of both objects.
|Display the name of the person who has the largest BMI.
*/
const persons = [
    {
        FullName:"Jordan Mangobo",
        Mass: 70,
        Height: 2.50
    },
    {
        FullName:"Helena Yasm",
        Mass: 50,
        Height: 1.70
    }
]

function IndiceMasseCorporelle(person){
    const imc = person.Mass/(person.Height**2);
    return imc;
}

(function compareIMC(individus) {
    imc1 = IndiceMasseCorporelle(individus[0]);
    imc2 = IndiceMasseCorporelle(individus[1]);
    if(imc1 > imc2){
           console.log(`${individus[0].FullName} has largest BMI`);
    }else {
       console.log(`${individus[1].FullName} has largest BMI`);
    }
})(persons);

/* 
|Exercise 2 : Grade Average
|-------------------------------
|In this exercise we will be creating a function which takes an array of grades
|as an argument and will console.log the average.
*/

function findAvg(gradesList) {

    let sum = 0;
    const size = gradesList.length;

    for(const grade in gradesList){
        sum+= gradesList[grade];
    }

    const average = sum/size;
    return average
}

(function getResult() {

    const notes = [80,55,70,75,60,55];
    const moyn = findAvg(notes)
    
    if( moyn >= 65 ){
           console.log(`Hi, you score is ${moyn} also you pass`);
    }else {
       console.log(`sorry, you score is ${moyn}, you fail`);
    }
})();

