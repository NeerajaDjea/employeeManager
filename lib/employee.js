var Table = require("cli-table");
// var colour = require('colour');
// var mysql = require("mysql");
var connection = require("../db/connection");
var inquirer = require("inquirer");
// var questions = require("./questions");

var employeeTable = new Table({
    head: ['Name', 'Role-ID', 'Manager-ID'],
    colWidths: [50, 20, 20],
});

var employee = {
    displayAllEmployees: async function() {
        await connection.query('SELECT * FROM employee', function(err, res) {
            if (err) throw err;
            else {
                res.forEach(employee => {
                    employeeTable.push(
                        [employee.first_name + " " + employee.last_name, employee.role_id, employee.manager_id]
                    );
                })
            }
            console.log(`\n` + `\n` + 'Employee Details'.green.underline)
            console.log(`\n` + employeeTable.toString());
        });
    },
    addEmployee: function(newE) {
        console.log("Adding new employee details...\n");
        var query = connection.query(
            "INSERT INTO employee SET ?", newE,
            function(err, res) {
                if (err) throw err;
                console.log(" New employee details inserted!\n");
                // questions();
            });
    },
    promptEmployee: async function() {
        const response = await inquirer.prompt([{
                name: 'first_name',
                type: 'input',
                message: `Enter new Employee's first name`
            },

            {
                name: 'last_name',
                type: 'input',
                message: `Enter new Employee's last  name`
            },
            {
                name: 'role_id',
                type: 'input',
                message: `Enter role-id`
            },
            {
                name: 'manager_id',
                type: 'input',
                message: `Enter manager-id`
            }

        ])
        console.log(response)
        employee.addEmployee(response);
    },

    deleteEmployee: async function(deleteE) {
        console.log('Removing employee..')
        var query = connection.query(
            "DELETE FROM employee WHERE  ?", deleteE,
            function(err, res) {
                if (err) throw err; {
                    console.log(`Employee ID - ${deleteE.id} is removed from the database`)
                }
            }
        )
    },

    promptDelete: async function() {
        const res = await inquirer.prompt([{
            name: 'id',
            message: `Enter employee's  id `,

        }, ])
        console.log(res)
        employee.deleteEmployee(res)
    },


}

module.exports = employee;
// employee.promptDelete();