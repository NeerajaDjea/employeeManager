const inquirer = require("inquirer");
// const Table = require('cli-table');
// const connection = require("../db/connection");
// const displayAllEmployees = require("./employee");
const department = require("./department");
const employeeRole = require("./employeeRole");
const employee = require("./employee");

async function questions() {
    console.log('\n');
    const answer = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Select an option:',
        choices: [
            'View All Employees',
            'View All Departments',
            'View All Roles',
            'Add Department',
            'Add New Employee',
            'Add New Role',
            'Delete department',
            'Delete Employee',
            'Exit'
        ]
    }]);

    switch (answer.action.toLowerCase()) {
        case 'view all employees':
            await employee.displayAllEmployees();
            questions();
            break;
        case 'view all departments':
            await department.displayAllDepartments();
            questions();
            break;
        case 'view all roles':
            await employeeRole.employeeRoles();
            questions();
            break;
        case 'add department':
            await department.promptDepartment();
            questions();
            break;
        case 'add new employee':
            await employee.promptEmployee();
            questions();
        case 'add new role':
            await employeeRole.promptRole();
            questions();
        case 'delete department':
            await department.promptDelete();
            questions();
        case 'delete employee':
            await employee.promptDelete();
            questions();
        case 'exit':
            console.log('Thank you for using Employee-Manager. Have a nice day!');

        default:
            break;

    }
}


module.exports = questions;