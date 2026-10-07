const students = [
    { name: "Ann", grades: [90, 85, 100] },
    { name: "Sasha", grades: [10, 10, 20] },
  {name: "Dasha", grades: [10, 10, 20]},
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





function addStudent(name, list) {
       // console.log(typeof name, name);
    if (typeof name !== "string" || name.trim() === "" || list.some(student => student.name === name.trim())){
        return null;
    }

    const student = { name: name.trim(), grades: [] };
    list.push(student);
    return list;
}

console.log(addStudent("      monica", students));
console.log(addStudent("Anna",students),"line 63");
console.log(addStudent("Anna", students),"line 64");


function addGrade(list, name, grade) {
    if (!Number.isFinite(grade) || grade < 0 || grade > 100) {
        return null;
    }

    const student = list.find(s => s.name === name);
    //console.log(typeof !student, !!student);
    if (!student) {
        return null;
    }

    student.grades.push(grade);
    return student;
}

console.log(addGrade(students, "Anna", 54), "line 86");



function getTopStudent(list) {
    let topStudent = list[0];
    for (let r = 0; r < list.length; r++){
        if (list[r].grades > topStudent.grades) {
            topStudent = list[r];
        }
    }
    
    return topStudent;
}

console.log("lne 101: ", getTopStudent(students));

function getFailingStudents(list) {
    let names = [];
    for (let s = 0; s < list.length; s++){
        const student = list[s];
        const average = calculateAverage(student.grades);

        if (getLetterGrade(average) === "F") {
            names.push({ name: student.name, "average": average });
        }
    }

    return names;  
}


console.log("\n\n", getFailingStudents(students), "line 115");