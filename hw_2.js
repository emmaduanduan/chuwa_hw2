/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function myDouble(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push({});
    newArr[i]["quantity"] = array[i]["quantity"] * 2;
    newArr[i]["price"] = array[i]["price"] * 2;
  }
  return newArr;
}

console.log(myDouble(itemsObject));

function myFilter(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]["quantity"] > 2 && array[i]["price"] > 300) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(myFilter(itemsObject));

function totalNumber(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]["quantity"] * array[i]["price"];
  }
  return total;
}

console.log(totalNumber(itemsObject));
/*
  
  Question 2
  
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

function letterOnly(string) {
  string = string.trim().toLowerCase();
  string = string.replace(/\W/g, " ");
  let newArr = string.split(" ");
  // console.log(newArr);
  let newArr2 = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== "") {
      newArr2.push(newArr[i]);
    }
  }
  // console.log(newArr2);
  let newString = newArr2.join(" ");
  return newString;
}
console.log(letterOnly(string));

/*

  
  Question 3
  
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

// function mergeSort(array1, array2) {
//   let newArr = array2;
//   newArr.map((a) => {
//     a["name"] = null;
//   });
//   for (let i = 0; i < array1.length; i++) {
//     let ref = true;
//     for (let j = 0; j < newArr.length; j++) {
//       if (newArr[j]["uuid"] === array1[i]["uuid"]) {
//         newArr[j]["name"] = array1[i]["name"];
//         ref = false;
//       }
//     }
//     if (ref) {
//       newArr.push(array1[i]);
//       newArr[newArr.length - 1]["role"] = null;
//     }
//   }
//   return newArr;
// }

// console.log(mergeSort(first, second));

function newMergeSort(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    let ref1 = true;
    for (let j = 0; j < newArray.length; j++) {
      if (array1[i]["uuid"] < newArray[j]["uuid"]) {
        newArray.splice(j, 0, {});
        newArray[j]["uuid"] = array1[i]["uuid"];
        newArray[j]["role"] = null;
        newArray[j]["name"] = array1[i]["name"];
        ref1 = false;
        break;
      }
    }
    if (ref1) {
      newArray.push({});
      newArray[newArray.length - 1]["uuid"] = array1[i]["uuid"];
      newArray[newArray.length - 1]["role"] = null;
      newArray[newArray.length - 1]["name"] = array1[i]["name"];
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let ref2 = true;
    for (let j = 0; j < newArray.length; j++) {
      if (array2[i]["uuid"] === newArray[j]["uuid"]) {
        newArray[j]["role"] = array2[i]["role"];
        ref2 = false;
        break;
      } else {
        if (array2[i]["uuid"] < newArray[j]["uuid"]) {
          newArray.splice(j, 0, {});
          newArray[j]["uuid"] = array2[i]["uuid"];
          newArray[j]["role"] = array2[i]["role"];
          newArray[j]["name"] = null;
          ref2 = false;
          break;
        }
      }
    }
    if (ref2) {
      newArray.push({});
      newArray[newArray.length - 1]["uuid"] = array2[i]["uuid"];
      newArray[newArray.length - 1]["role"] = array2[i]["role"];
      newArray[newArray.length - 1]["name"] = null;
    }
  }

  return newArray;
}

console.log(newMergeSort(first, second));
