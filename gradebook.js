const students = [
  { name: "Ann", grades: [90, 85, 100] },
  { name: "Ben", grades: [40, 55, 30] },
  { name: "Clara", grades: [70, 75, 80] },
];





function calculateAverage(grades) {
    if (grades.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < grades.length; i++){ 
        sum += grades[i];
    }

    // return Math.round((sum / grades.length) *10 ) / 10;
    return +(sum / grades.length).toFixed(1);
}

console.log(calculateAverage([]), "line 23");


function getLetterGrade(avg) {

    if (avg >= 90) {
        return "A";
        //console.log(grade);
    } else if (avg >= 80) {
        return "B";
        // console.log(grade);
    } else if (avg >= 70) {
        return "C";
        // console.log(grade);
    } else if (avg >= 50) {
       return "D";
        // console.log(grade);
    } else {
        return "F";
        // console.log(grade);
    }
 
}

console.log(getLetterGrade(105),"result of the function");
//console.log( typeof calculateAverage([1, 59, 9, 80]), "result of the avarage");
console.log(getLetterGrade(calculateAverage([])), "result of the 47line");





function addStudent(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return null;
    }
    return { name: name.trim(), grades: [] };
}

console.log(addStudent("      monica"));