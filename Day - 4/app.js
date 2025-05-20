window.onload = function () {
  const users = JSON.parse(sessionStorage.getItem("users")) || [];
  const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
  users.forEach(user => {
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = user.name;
    newRow.insertCell(1).textContent = user.email;
    newRow.insertCell(2).textContent = user.course;
  });
  calculate(users);
};

function addUser(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  let users = JSON.parse(sessionStorage.getItem("users")) || [];
  const userExists = users.some(user =>
    user.name === name || user.email === email && user.course === course
  );

  if (userExists) {
    alert("User already exists!");
    return;
  } else {
    users.push({ name, email, course,age });
    sessionStorage.setItem("users", JSON.stringify(users));
    const table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = course;
  }
  console.log(JSON.stringify(users));
  calculate(users);
  event.target.reset();
}
function calculate(users) {
  let totalStudents = 0;
  let avgAge = 0;
  for (const user of users) {
    totalStudents++;
    avgAge += Number(user.age);
  }
  avgAge = (users.length > 0) ? (avgAge / users.length).toFixed(2) : 0;
  const uniqueCourses = new Set(users.map(user => user.course));
  document.getElementById("studentCard").innerText = `The Total No of Students are ${totalStudents}`;  
  document.getElementById("courseCard").innerHTML = `The Total No of Courses enrolled are ${uniqueCourses.size}`;  
  document.getElementById("ageCard").innerHTML = `The Average Age of Students enrolled are ${avgAge}`;  
}

/*

----------------------------------------------------
|              Navbar (Dark/Primary)               |
|  Brand | Home | Add Profile | View Profiles | 📞 |
----------------------------------------------------

|              Container (Main Body)               |

|--------------------------------------------------|
|          Row with 2 Columns (Grid System)        |
|--------------------------------------------------|

|  Column 1 (col-md-6):           |  Column 2 (col-md-6):           |
|  -----------------------------  |  -----------------------------  |
|  📋 Add Student Form             |  📊 Student Info Table           |
|  -----------------------------  |  -----------------------------  |
|  [Name    : ____________]       |  | Name   | Email  | Course |   |
|  [Age     : ____________]       |  |--------|--------|--------|   |
|  [Email   : ____________]       |  | John   | john@  | CS     |   |
|  [Course  : ____________]       |  | Anna   | anna@  | IT     |   |
|  [Submit Button]                |  |--------|--------|--------|   |

----------------------------------------------------
|         Optional Row with Stat Cards (Grid)      |
|--------------------------------------------------|
| [👥 Total Students: 50]  [📘 Courses: 6]  [📈 Avg Age: 21] |
----------------------------------------------------

----------------------------------------------------
|              Footer (Dark/Light)                 |
|        © 2025 Student Dashboard by Nikin         |
----------------------------------------------------
*/