
/***** 
 String övning 
  ****/
const firstname = "david";
const lastname = "heidari";
const age = "30";
const city = "Gothenburg";
const counry = "Sweden";

// .split-metoden används bara för sträng

const str = "I love to learn more about jvaScript.";
const words = str.split(" ");
console.log(words[1]);

const lol = "How to go from noob to pro in JavaScript?";
const word = lol.split(" ");
console.log(word[4]);

// här har vi .slice-metoden som används för array av number 
const num = [1, 2, 3, 4, 5];
const numy = num.slice(" ");
console.log(numy[2]);
    
// Trying to do a harder task here 

let rawString = "Sagan om ringen-J.R.R Tolkien-1954-Allen & Unwin";

const ord = rawString.split(" ");

let booktitle = "Sagan om ringen";
let author = "J.R.R. Tolkien";
let publishYear = 1954;
let publisher = "Allen & Unwin";


/***** 
 Number övning 
  ****/
const num1 = 10.4;
const num2 = 4.5;

// Räkna ut area och omkrets på en cirkel

const radie = 5;
const pi = Math.PI;

// Beräknar omkretsen
const omkrets = 2 * pi * radie;
const area = pi * Math.pow(radie, 2);

console.log("Arean av cirkel med radien 5:", Math.floor(area))
console.log("Omkretsen på en cicle med radie 5: ", Math.floor(omkrets));


/**************************************/
console.log("Minus:", Math.round(num1 - num2));
console.log("Plus:", num1 + num2);
console.log("Delat:", Math.round(num1 / num2));
console.log("Modjul:", Math.floor(num1 % num2));
console.log("multi:", Math.ceil(num1 * num2));

// Jag använder \n (shift,alt och 7) för att bryta rad



console.log(`Boktitel: ${booktitle}\nFörfattare: ${author}\nUtgivningsår: ${publishYear}\nUtgivare: ${publisher}`);




console.log(firstname.toUpperCase());
console.log(lastname.toUpperCase());
console.log(lastname.substring(3, 7));
console.log(firstname.substring(0, 4));

/* Här har jag skapat stringvariabler och har kombinerat med konkatenering
och denna är även en templatestring som iinehålelr text och variabler.  
*/
console.log(`Hi may name is ${firstname}${lastname}. I am ${age} years old. I live in ${city} in ${counry}.`);