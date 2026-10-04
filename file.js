function sumArray(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  //console.log(sum);
  return sum;
}
console.log("sumArray(): \nfirst example:", sumArray([1, 24, 5, 6, 36, 4]));
console.log("sumArray(): \nsecond exaple:",sumArray([]));


function largest(n) {
  let big = n[0];
  for (let i = 1; i < n.length; i++){
    if (n[i] > big) {
      big = n[i];
    }
  }
  return big;
}

console.log("largest(): \nfirst example:", largest([123, 4332, 54242, 534]));
console.log("largest(): \nsecond:", largest([1, 24, 4, 54, 533]));
console.log("largest: ", largest([-5, -10, -1]));


function reverseString(str) {
  //  FIRST VERSION
  // let string = str.split("");
  // return string.reverse().join("");
  
  //SECOND VERSION
  let string = str.split("");
  let arr = [];
  for (let i = string.length - 1; i >= 0; i--){
    arr.push(string[i]);
  }

  return arr.join("");
}
console.log("reverseString(): \nfirst example: ", reverseString("huuuuiiiiiiro"));
console.log("reverseString(): \nsecond example:", reverseString("lijolojo"));

function countVowels(str) {
   let string = str.toLowerCase();
  let count = {}; 
  let vowels = ["a", "o", "i", "u", "e"];
  for (let i = 0; i < string.length; i++){
    if (vowels.includes(string[i])) {
      count[string[i]] =(count[string[i]] == undefined ? 0 : count[string[i]]) + 1;
    }
  }
  return count;
}
console.log(countVowels("AEIOU")); // should be { a:1, e:1, i:1, o:1, u:1 }, you get {}
console.log("countVowels(): \n1. ", countVowels("here We have OTIR"));

console.log("countVowels(): \n2. ", countVowels("nothing to loose or use bad memories"));

function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
  let left = 0;
  let right = clean.length - 1;
   
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log("first example: ", isPalindrome("oel"));

function removeDuplicates(arr) {
  //1 version
  //return [...new Set(arr)];

  //2 version
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log("removeDuplicates():\n1", removeDuplicates([1, 1, 2, 2, 2, 2, 23, 3, 4, 4, 4, 5, 'sflsk', 'sflsk', 'fomo', 'fomo']));