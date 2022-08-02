// SPRINT 1
// JS BASICS

console.log("Starting JS...");

// EXERCISE 1

let myName = "Jan";
console.log(myName);

// EXERCISE 2

let age = 30;
console.log(age);

// EXERCISE 3

let juliasAge = 32;
let ageDiff = age - juliasAge;
console.log(ageDiff);

//EXERCISE 4

if (age > 21) {
  console.log("You are older than 21.");
} else {
  console.log("You are not older than 21.");
}

//EXERCISE 5

if (age > juliasAge) {
  console.log("Julia is younger than you.");
} else if (age < juliasAge) {
  console.log("Julia is older than you.");
} else {
  console.log("You have the same age as Julia.");
}

// JS ARRAYS

// EXERCISE 6

const myArray = ["Alberto", "Emily", "Philipp", "Jan", "Raúl"];
console.log(myArray[0]); //Getting the first arrayItem
console.log(myArray[myArray.length - 1]); //Getting the last arrayItem
// Looping through each array item
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//EXERCISE 7

// using while loop to print an array

let ageArray = [44, 29, 30, 18, 20, 31, 32, 33];
let i = 0;
while (i < ageArray.length) {
  console.log(ageArray[i]);
  i++;
}

// using while loop to print only even numbers

while (i < ageArray.length) {
  console.log(ageArray[i]);
  i++;
}
for (let i = 0; i < ageArray.length; i++)
  if (ageArray[i] % 2 === 0) {
    console.log(ageArray[i]);
  }

// using a for loop to print only even numbers

for (let i = 0; i < ageArray.length; i++)
  if (ageArray[i] % 2 == 0) {
    console.log(ageArray[i]);
  }

// FUNCTIONS THAT USE ARRAYS

// EXERCISE 8

function returnLowestNumber(arr) {
  let lowestNumber = arr[0];
  for (i = 0; i < arr.length; i++)
    if (arr[i] < lowestNumber) {
      lowestNumber = arr[i];
    }
  return lowestNumber;
}

console.log(returnLowestNumber([100, 0.5, 67, 2, -4, 44, 67, 0.2, -100, 899]));

// EXERCISE 9

// return biggest number using a for loop

function returnBiggestNumber(arr) {
  let biggestNumber = arr[0];
  for (i = 0; i < arr.length; i++)
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  return biggestNumber;
}
console.log(returnBiggestNumber([44, 777, 23, 25, 11, 789, 59, 1, 2, 1001]));

// print biggest number with sort() method

function printBiggestNumber(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let biggestNr = arr[arr.length - 1];
  return biggestNr;
}

console.log(printBiggestNumber([44, 777, 25, 11, 789, 59, 1, 1001, 76, 34]));

// EXERCISE 10

function printArrayElement(arr, i) {
  console.log(arr[i]); // if one-based: console.log(arr[i-1])
}

printArrayElement([5, 6, 7, 8, 9, 12, 15, 92, 19], 5);

//EXERCISE 11

// Print repeating values with a for loop

function printRepeatingValues(arr) {
  let duplicates = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicates.push(arr[i]);
    }
  }
  {
    console.log(duplicates);
  }
}

printRepeatingValues([
  33, 5, 7, 86, 33, 12, 11, 6, 8, 6, 44, 2, 89, 44, 71, 900, 234, 900,
]);

// Finding duplicates with the filter() method

function filterDuplicates(arr) {
  let duplicates = arr.filter((val, index) => index !== arr.indexOf(val));
  return duplicates;
}

console.log(filterDuplicates([1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 7]));

// EXERCISE 12

function joinArrayToString(arr) {
  return arr.join(", ");
}

console.log(joinArrayToString(["Red", "Green", "White", "Black"]));

// EXERCISE 13

function reverseNumber(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

console.log(reverseNumber(8778211));

// EXERCISE 14

function returnAlphabeticalOrder(str) {
  let arr = str.split("");
  arr.sort();
  return arr.join("").trim();
}

console.log(returnAlphabeticalOrder("jokalepma"));

// EXERCISE 15

function titleCase(str) {
  return str.toLowerCase().replace(/^(\w)|\s(\w)/g, (grp) => grp.toUpperCase());
}

console.log(titleCase("guten tag"));

// EXERCISE 16

//a) displays the length of the biggest word (number)

function returnLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (longestWord < strSplit[i].length) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

console.log(
  returnLongestWord("Der Geschmack ist das längste Wort dieses Satzes.")
);

// b) shows the longest word (string)

function nameLongestWord(str) {
  var longestWord = str.split(" ").reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

console.log(
  nameLongestWord("Der Geschmack ist das längste Wort dieses Satzes.")
);

// EPIC 2: DOM MANIPULATION

// EXERCISE 17

function addBands(myBandList) {
  for (let i = 0; i < myBandList.length; i++) {
    let listItem = document.createElement("li");
    let bandNames = document.createTextNode(myBandList[i]);
    listItem.appendChild(bandNames);
    document.getElementById("band-list").appendChild(listItem);
  }
}

addBands(["The Radio Dept.", "Four Tet", "Black Marble", "Bloc Party"]);

// EXERCISE 18

function addMultTable(rows, cols) {
  const tableContainer = document.getElementById("table");

  const table = document.createElement("table");

  // create rows
  for (let i = 0; i < rows; i++) {
    const rows = document.createElement("tr");
    table.appendChild(rows);
    // Create columns
    for (let x = 0; x < cols; x++) {
      const col = document.createElement("td");
      col.innerHTML = x + 1;

      rows.appendChild(col);
    }
  }

  tableContainer.appendChild(table);
}

addMultTable(4, 8);
