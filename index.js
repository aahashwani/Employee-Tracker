const mysql = require('mysql2');
var inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Ismaili786!!!',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);

function selectOptions() {
inquirer.prompt({
        type: 'list',
        name: 'inital Options',
        message: 'selecte an option',
        choices: [
            "View deparments",
            "View role",
            "View employee",
            "Add a department.",
            "Add a role.",
            "Add an employee.",
            "Update an employee's role.",
            "Update an employee's manager.",
            "Delete a department.",
            "Delete a role.",
            "Delete an employee.",
            "Exit.",
        ]
    })
  .then(function(answer){
    switch (answer.action) {
    case "View a department.":
      addDepartment();
      break;

    case "View a role.":
      addRole();
      break;

    case "View an employee.":
      addEmployee();
      break;

    case "Add departments.":
      viewDepartment();
      break;

    case "Add roles.":
      viewRole();
      break;

    case "Add employees.":
      viewEmployee();
      break;

    case "Update an employee's role.":
      updateRole();
      break;

    case "Update an employee's manager.":
      updateEmpManager();
      break;

    case "Delete a department.":
      deleteDepartment();
      break;

    case "Delete a role.":
      deleteRole();
      break;

    case "Delete an employee.":
      deleteEmployee();
      break;

    case "Exit.":
      db.end();
      console.log("Thank you ")
      console.log(
        logo({
            name: 'Have a great day ',
            lineChars: 10,
            padding: 2,
            margin: 2,
            borderColor: 'pink',
            logoColor: 'yellow',
            textColor: 'green',
        })
        .render()
    );
      break;
  }
})
}

function viewDeparments() {
db.query('SELECT * FROM deparment', function (err, results) {
  console.table(results);
});
}
function viewDepartment (){
    const sql = `SELECT * FROM department`;
    db.query (sql, (err,result) =>{
      if (err) throw err;
      console.table(result);
      selectOptions();
    });
    }

    function viewRole () {
        const sql = `SELECT role.id,title, department.name AS department,salary
          FROM role 
          LEFT JOIN department 
          ON role.department_id = department.id
          ORDER BY role.id;`;
        db.query (sql, (err,result) =>{
          if (err) throw err;
          console.table(result);
          initPrompt();
        });
        }
selectOptions ();