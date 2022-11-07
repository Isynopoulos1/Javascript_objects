// // function fruitProcessor(apples, oranges){
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and oranges ${oranges}`;
// //     return juice;
// // }


// // const appleJuice = fruitProcessor(3, 8);
// // console.log(appleJuice)


// ///////////////////////////////////////////////////FUNCTION DECLARATION
// function calcaAge(birthYear){
//     return 2037 - birthYear
// }

// const age1 = calcaAge(1991)
// console.log(age1)

// ///////////////////////////////////////////////////FUNCTION EXPRESSION
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991)
// console.log(age1, age2)

// ///////////////////////////////////////////////////ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1991);
// console.log(age3)


// /////////////////////////////////////////////////// ARROW FUNCTION WITH ONE PARAMETER
// const retirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(retirement(1991));

// ARROW FUNCTION WITH TWO PARAMETERS
// const retirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return ` ${firstName}, retires in ${retirement} years`
// }
// console.log(retirement(1991, 'Isela'));



// ///////////////////////////////////////////////////FUNCTION WITH TWO PARAMETERS

// const cutPieces = function (fruit){
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges){

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and pieces of oranges ${orangePieces}`;
//     return juice;
// }

// console.log(fruitProcessor(2,4))

// ///////////////////////////////////////////////////FUNCTION WITH TWO PARAMETERS USING IF

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const retirement =  function(birthYear, firstName){

//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         return retirement
//     } else{
//         return -1

//     }
    
//     // return ` ${firstName}, retires in ${retirement} years`
// }
// console.log(retirement(1991, 'Isela'));
// console.log(retirement(1950, 'Erwan'));





/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// /////////////////////////////////////////////////// FIRST CHALLENGE
// const calcAverage = (s1,s2,s3) => {
//     const average = s1 +s2 +s3 / 3
//     return average
// }

// const DScore = calcAverage (44, 23, 71)
// const KScore = calcAverage (65, 54, 49)

// const checkWinner = function(avgDolhins, avgKoalas){
    
    
//     if (avgDolhins >= 2 * avgKoalas){
//         console.log(`the winners are Dolphins with ${DScore} score`)
//     } else if (avgKoalas >= 2 * avgDolhins){
//         console.log(`the winners are Koalas with ${KScore} score`)
//     } else {
//         console.log(`No team wins`);
//     }}

// result = checkWinner(DScore,KScore )


// ///////////////////////////////////////////////////ARRAYS

// const friends = ['Michael', 'Peter',' Steven'];
// console.log(friends.length)
// console.log(friends[friends.length -1])
// friends[2]='Jay'
// console.log(friends)

// const y = new Array(1991, 1988, 1987);

// console.log(y[0])


// //exercise

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear
//  }

// const years =[1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);

// // AL ESCRIBIR -1 PODEMOS ACCEDER AL ULTIMO ELEMENTO EN LA LISTA AUNQUE NO SEPAMOS SU LONGITUD (years[years.length - 1])
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1,age2,age3)

// // PODEMOS ALMACENAR ESTAS 3 EDADES EN UNA VARIABLE ,COLOCANDO LA EXPRESION DE LAS VARIABLES ANTERIORES , calcAge2(years[0]), ETC

// const ages = [calcAge2(years[0]),calcAge2(years[1]),calcAge2(years[years.length -1])]
// console.log(ages)



// // ///////////////////////////////////////////////////METHODS

// //PUSH // TO ADD ELEMENTS IN THE END OF THE ARRAY
// const friends = ['Michael', 'Peter',' Steven'];
// const newLength = friends.push('Jay');
// console.log(newLength)

// //PUSH // TO ADD ELEMENTS IN THE BEGGINING OF THE ARRAY
// friends.unshift('John')
// console.log(friends)


// //POP // TO REMOVE ELEMENTS IN THE LAST ELEMENT OF THE ARRAY
// friends.pop()
// const popped =friends.pop()
// console.log(popped)
// console.log(friends)

// //SHIFT // TO REMOVE THE FIRST ELEMENT OF THE ARRAY
// friends.shift()
// console.log(friends)

// //indexOf // TO KNOW THE POSITION OF AN ELEMENT IN THE ARRAY
// console.log(friends.indexOf('Michael'));



// //INCLUDES // TO KNOW IF AN ELEMENT IS IN THE ARRAY AND RETURN A BOOLEAN TRUE OR FALSE
// console.log(friends.includes('Michael'))
// console.log(friends.includes('Bob'))

// if (friends.includes('Peter')){
//     console.log('you have a friend called peter')
// }



///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);






///////////////////////////////////////
// OPTION 1: IF STATEMENT

// const calcTip = (bill) => {
  
//     if(bill <= 300 && bill >= 50){
//       return bill * 0.15;
//     } else {
//       return bill * 0.2
//     }
  
//   }
  
  ///////////////////////////////////////
  // OPTION 2: TERNARY OPERATOR
  
  // const calcTip2= (bill) => {
  //   return bill <= 300 && bill >= 50 
  //   ? bill * 0.15 
  //   : bill * 0.2;
  // }
  // console.log(calcTip2(430))
  
   
  // //TEST DATA: Test for bill values 275, 40 and 430
  
//   const bills =[275, 40, 430]
//   const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]
//   const totals = [bills[0]+ tips[0],bills[1]+ tips[1], bills[2]+ tips[2]]
  
//   // TEST WITH THE TOTAL
//   console.log(bills, tips, totals)

// // // ///////////////////////////////////////////////////OBJECTS
// const iselaArray = [
//     'Isela',
//     'Alarcón',
//     3000 -1988,
//     'Developer',
//     ['Erwie', 'Doudou', 'Gala', 'Romerita']
//   ];
  
//   // ITS CALLED "LITERAL SINTAX" BECAUSE LITERALLY WRITE THE CONTENT OF THE OBJECT
//   const isela = {
//     firstName:'Isela',
//     lastName :'Alarcón',
//     age: 3000 -1988,
//     job : 'developer',
//     family: ['Erwie', 'Doudou', 'Gala', 'Romerita']
//   };
  
//   console.log(isela.lastName)
//   console.log(isela['lastName'])

// // CONCATENATING WITH THE KEY VALUE
// const nameKey = 'Name';
// console.log(isela['first' + nameKey]);
// console.log(isela['last' + nameKey]);


// const interestedIn = prompt('What are u want to know about isela? Choose between: firstName, lastName, age, job and family ')
// // IF - ELSE STATEMENT
// // if(isela[interestedIn]){
// //   console.log(isela[interestedIn])
// // } else{
// //   // console.error('error')
// // }
// //  isela.location = 'Barcelona';
// //  isela['instagram'] = '@Isynnopoulos'


 //MINI CHALLENGE
 // Jonas has 3 family members and his best friend is Michael

//  console.log(isela.firstName, 'has',isela.family.length, 'family members, and his favourite is', isela.family[0])




//   const isela = {
//     firstName:'Isela',
//     lastName :'Alarcón',
//     birthday: 2000,
//     job : 'developer',
//     family: ['Erwie', 'Doudou', 'Gala', 'Romerita'],
//     hasDriversLicense: true,


// //FIRST VERSION

// //     calcAge:(birthday) => {
// //         return 2037 - birthday  
// //     }
// // };
// //   console.log(isela.calcAge(2000))

// // THIS SINTAX IS A METHOD AS PROPERTY OF ISELA'S OBJECT

//     calcAge: function(){
//         return 3000 - this.birthday;
//     }
//   };
   


//   console.log(isela.calcAge());
//   console.log(isela.calcAge()); 
//   console.log(isela.calcAge());  
//   console.log(isela.calcAge());


  
  
 // this sintax is the same that puts the property of isela's object

//  const calcAge = birthday => {
//     return 2037 - birthday
//  }


// const isela = {
//     firstName:'Isela',
//     lastName :'Alarcón',
//     birthday: 2000,
//     job : 'developer',
//     family: ['Erwie', 'Doudou', 'Gala', 'Romerita'],
//     hasDriversLicense: true,

//     calcAge: function (){
//         this.age = 2037 - this.birthday;
//         return this.age;
//     },

//     getSummary: function (){
//         this.license = this.hasDriversLicense;
//         return this.license;
//     }
// };


// isela.calcAge()
// isela.getSummary()
// console.log(isela.age)
// console.log(isela.hasDriversLicense)


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const markBmi = {
//     weight : 78,
//     height: 1.69,

//     calcBmi: function (){
//         this.bmi = this.weight / this.height ** 2 ;
//         return this.bmi;
//     }
// };
// markBmi.calcBmi()



// const johnBmi = {
//     weight: 92,
//     height: 1.95,

//     calcBmi: function (){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// }
// johnBmi.calcBmi()


// const checkBmi = (mark, john) => {
//     if (mark > john){
//         console.log(`the winner is Mark with ${markBmi.bmi} BMI `)
//     }else{
//         console.log(`the winner is John with ${johnBmi.bmi} BMI`)
//     }
    
// }
// result = checkBmi(markBmi, johnBmi)




///////////////////////////////////////
// LOOPS

//FOR LOOPS KEEP RUNNING WHILE CONDITION IS TRUE

// // ********* rep ++ is the same that puts rep = rep + 1   ********* 
// for (let rep = 1; rep <=10 ; rep ++){
// console.log(`lifting weights repetitions ${rep}🏋🏼‍♀️`)
// }


// const isela = [
//     'Isela',
//     'Alarcón',
//     3000 -1988,
//     'Developer',
//     ['Erwie', 'Doudou', 'Gala', 'Romerita'],
//     true
//   ];

// //I CREATED AN EMPTY STRING TO STORED THE VALUE OF EACH TYPE INSIDE DE ARRAY
//   const types=[]

//   for (let i = 0; i < isela.length; i++) {
//     //READING FROM ISELA ARRAY
//     console.log(isela[i])

//     // //FILLING THE TYPES ARRAY 
//     // types[i] = typeof isela[i];
//     types.push(typeof isela[i])
//   }
//   console.log(types)


//   // GETTING THE VALUE FROM AN EMPY ARRAY, USING THE PUSH METHOD

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i <years.length; i++){
//     ages.push(2037 - years[i])
//   }
//   console.log(ages)

//   // CONTINUE AND BREAK
//   console.log('--ONLY STRINGS--')
//   for (let i = 0; i < isela.length; i++){
//     if (typeof isela[i] !=='string') continue;

//     console.log(isela[i], typeof isela[i])
//   }

//     // BREAK WITH NUMBER
//     console.log('--ONLY NUMBER--')
//     for (let i = 0; i < isela.length; i++){
//       if (typeof isela[i] ==='number') break;
  
//       console.log(isela[i], typeof isela[i])
//     }

// ARRAY IN REVERSE 5,4,3,2,1,0
const isela = [
    'Isela',
    'Alarcón',
    3000 -1988,
    'Developer',
    ['Erwie', 'Doudou', 'Gala', 'Romerita'],
    true
  ];

  for (let i = isela.length -1; i >= 0; i--) {
    console.log(i, isela[i])
   
  }

  // LOOPS INSIDE A LOOP
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----STARTING EXERCISE--- ${exercise}`)
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} repetitions 🏋🏼‍♀️${rep}`)
    }
        
}
