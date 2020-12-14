'use strict';
var inquirer = require('inquirer');
var mysql = require("mysql");


inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'select employee',
            name: 'employees',
            choices:    [

                new inquirer.Separator(' = All employees =n'),
                {
                    name: 'Barney Rubble'
                },
                {
                    name: 'Wilma Flintstone'
                },


                new inquirer.Separator(' = Add employee = '),
                {
                    create
                }
            ]
        },

        inquirer
        .prompt([
          {
            message: "Hello, how can I help you?",
            type: "list",
            message: "Would you like to [POST] an auction or [BID] on an auction?",
            choices: ["POST", "BID", "EXIT"]
           
      




    ]),

    function createEmployee() {
      console.log("Inserting a new employee...\n");
      var query = connection.query(
        "INSERT INTO Employee_List TABLE?",
        {
          first_name: "Homer",
          last_name: "Simpson",
          role_id: Nuclear_Safety_Inspector,
          manager_id: null
        },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " employee inserted!\n");
          // Call updateProduct AFTER the INSERT completes
          updateProduct();
        }
      );
    
      // logs the actual query being run
      console.log(query.sql);
    },
    
    function updateProduct() {
      console.log("Updating all Employee Tracker...\n");
      var query = connection.query(
        "UPDATE Employee_List SET ? WHERE ?",
        [
          {
            quantity: 1
          },
          {
            first_name: "Homer"

          },
          {
            last_name: "Simpson"
          }
        ],
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " Employee Tracker updated!\n");
// --------------------------------------------------------------------------------------------------------------

function createEmployeeRole() {
  console.log("Inserting a TABLE ROLES...\n");
  var query = connection.query(
    "INSERT INTO TABLE ROLES TABLE?",
    {
      department_id: "power plant operator",
      employee_name: "Homer, Simpson",
      
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee Role inserted!\n");
      // Call createEmployeeRole AFTER the INSERT completes
      createEmployeeRole();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
},

function updateEmplyee_Tracker() {
  console.log("Updating Employee Tracker...\n");
  var query = connection.query(
    "UPDATE Employee_List SET ? WHERE ?",
    [
      {
        quantity: 1
      },
      {
        department_id: "power plant operator"

      },
      {
        employee_name: "Homer, Simpson"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Employee Tracker updated!\n");



function start() {
    inquirer
      .prompt({
        name: "createOrDelete",
        type: "list",
        message: "Would you like to add an employee or delete an employee?",
        choices: ["POST", "Delete", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === "POST") {
          postEmployee();
        }
        else if(answer.postOrDelete === "Delete") {
          create();
        } else{
          connection.end();
        }
      });
  }
  

  
  // function to handle posting new items up for auction
  function postAuction() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "Which employee would like to create?"
        },
        {
          name: "category",
          type: "input",
          message: "What category would input your new employee"
        },
        {
          name: "startingRole",
          type: "input",
          message: "What would you like your starting role to be?",
          validate: function(value) {
            if (isNaN(value) === true) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO Roles Table ?",
          
          function(err) {
            if (err) throw err;
            console.log("Your Employee ROLES was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
  
  


      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
},

function deleteProduct() {
  console.log("Deleting Nuclear...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

function postAuction() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Which employee would like to add a department id?"
      },
      {
        name: "category",
        type: "input",
        message: "What department would input your new employee"
      },
      {
        name: "startingDepartment",
        type: "input",
        message: "What would you like your starting department to be?",
        validate: function(value) {
          if (isNaN(value) === true) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO Roles Table ?",
        
        function(err) {
          if (err) throw err;
          console.log("Your Employee ROLES was created successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });
}


