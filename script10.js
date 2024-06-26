// Program 10

const student = {

 firstName ="Muhammad", 
 lastName = "Muzammil Bashir",
 gender: "Male",
 rollNo = 1234,
 university =  "IIUI ISLAMABAD",
 semester =  "5th semester",
 passingYear ="2022-2026",
 greet = function()  {

    return "Hello, My Name is " + firstName + " " + lastName + 
           ". My Roll No is " + rollNo + 
           ". My university name is " + university + 
           ". I'm in " + semester + 
           ". My degree is expected Inshaa Allah from " + passingYear + ".";
  };
};

console.log(student.firstName); // Muhammad
console.log(student.lastName);  // Muzammil Bashir
console.log(student.rollNo);    // 1234
console.log(student.university);// IIUI ISLAMABAD
console.log(student.semester);  // 5th semester
console.log(student.passingYear); // 2022-2026
console.log(student.greet());   // Hello, My Name is Muhammad Muzammil Bashir. My Roll No is 1234. My university name is IIUI ISLAMABAD. I'm in 5th semester. My degree is expected from 2022-2026.
