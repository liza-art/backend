function sumArray(n) {
  console.log("RUNNING: ");
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    //console.log(n[i]);
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


function reverseString(str) {
  let string = str.split("");
  return string.reverse().join("");
}
console.log("reverseString(): \nfirst example: ", reverseString("huuuuiiiiiiro"));
console.log("reverseString(): \nsecond example:", reverseString("lijolojo"));

function countVowels(str) {
  str.toLowerCase();
  let count = {}; 
  let vowels = ["a", "o", "i", "u", "e"];
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])) {
      //console.log(str[i]);
      //console.log(i);
      count[str[i]] =(count[str[i]] == undefined ? 0 : count[str[i]]) + 1;
    }
  }
  return count;
}

console.log("countVowels(): \n1. ", countVowels("here We have OTIR"));

console.log("countVowels(): \n2. ", countVowels("nothing to loose or use bad memories"));

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++){
    for (let r = str.length - 1; i >= 0; r--){
   if (str[r] === str[i]) {
        return true;
      }
    return false;
  }
    }
   
  
}

console.log("first example: ", isPalindrome("leveylu"));