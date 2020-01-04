var Table = require("cli-table");
var colour = require('colour');
var mysql = require("mysql");
var connection = require("../db/connection");
var inquirer = require("inquirer");
var questions = require("./questions")

var employeeRoleTable = new Table({
    head: ['ID', 'Title', 'Salary', 'Dpt-ID'],
    colWidths: [10, 30, 20, 10],
});

var employeeRole = {
    employeeRoles: async function() {
        await connection.query('SELECT * FROM employee_role', function(err, res) {
            if (err)
                throw err;
            else {
                res.forEach(role => {
                    employeeRoleTable.push(
                        [role.id, role.title, role.salary, role.department_id]
                    );
                })
            }
            console.log(`\n` + `\n` + 'Employee Role'.green.underline)
            console.log(`\n` + employeeRoleTable.toString());
        });
    },

    addRole: function(newRole) {
        console.log("Adding new employee role...\n");
        var query = connection.query(
            "INSERT INTO employee_role SET ?", newRole,
            function(err, res) {
                if (err) throw err;
                console.log(" New employee role inserted!\n");
                // questions();
            });
    },
    promptRole: async function() {
        const response = await inquirer.prompt([{
                name: 'title',
                type: 'input',
                message: `Enter new role `
            },
            {
                name: 'salary',
                type: 'input',
                message: `Enter salary`
            },
            {
                name: 'department_id',
                type: 'input',
                message: `Enter department-id`
            }

        ])
        console.log(response)
        employeeRole.addRole(response);
    }
}

module.exports = employeeRole;