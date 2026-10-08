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




function addStudent(name, list) {
    
    if (typeof name !== "string" || name.trim() === "" || list.some(student => student.name === name.trim())){
        return null;
    }

    const student = { name: name.trim(), grades: [] };
    list.push(student);
    return list;
}




function addGrade(list, name, grade) {
    if (!Number.isFinite(grade) || grade < 0 || grade > 100) {
        return null;
    }

    const student = list.find(s => s.name === name);
   
    if (!student) {
        return null;
    }

    student.grades.push(grade);
    return student;
}







function getTopStudent(list) {
    let topStudent = list[0];
    for (let r = 0; r < list.length; r++){
        if (calculateAverage(list[r].grades) > calculateAverage(topStudent.grades)) {
            topStudent = list[r];
        }
    }
    
    return topStudent;
}





function getFailingStudent(list) {
    let names = [];
    for (let s = 0; s < list.length; s++){
        const student = list[s];
        const average = calculateAverage(student.grades);

        if (getLetterGrade(average) === "F") {
            names.push(student.name);
        }
    }

    return names;  
}







function getClassAverage(list) {

    let average = [];
    for (let s = 0; s < list.length; s++){
   
        const averageOfStudent = calculateAverage(list[s].grades);
        average.push(averageOfStudent);
    }
    if (average.length === 0) {
        return null;
    }

    const result =  calculateAverage(average);
    return result;
}








function printReport(list) {
  for (let i = 0; i < list.length; i++) {
    const avg = calculateAverage(list[i].grades);
    const letter = getLetterGrade(avg);
    console.log(
      `${list[i].name.padEnd(6)}| avg: ${String(avg).padEnd(5)}| grade: ${letter}`
    );
  }

  console.log("");

  const top = getTopStudent(list);
  console.log(`Top student: ${top === null ? "none" : top.name}`);

  const failing = getFailingStudent(list);

 console.log(`Failing: ${failing.length === 0 ? "none" : failing.join(", ")}`);
console.log(`Class average: ${getClassAverage(list)}`);
}

printReport(students);
