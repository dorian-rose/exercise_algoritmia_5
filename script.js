//Solicitar los nombres y el sexo de "x" alumnos de un curso  que se han dividido en dos grupos: A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario cuantos alumnos son de cada grupo y los muestre por pantalla.

const studentList = [];
const gender = [];

const groupA = studentList.filter(
  (student, i) =>
    (student[0] < "n" && gender[i] == "f") ||
    (student[0] > "m" && gender[i] == "m")
);
const groupB = studentList.filter(
  (student, i) =>
    (student[0] > "m" && gender[i] == "f") ||
    (student[0] < "n" && gender[i] == "m")
);

function assignGender() {
  studentList.forEach((element) => {
    gender.push(prompt(`Is ${element} male or female? (enter m or f)`));
  });
}

function getStudentNames() {
  let numStudents = prompt("how many students are there?");

  for (let i = 0; i < numStudents; i++) {
    studentList.push(prompt("Enter student name"));
  }
  assignGender();
}

getStudentNames();

alert(`group A is: ${groupA} and number is ${groupA.length}`);
alert(`group B is: ${groupB} and number is ${groupB.length}`);
