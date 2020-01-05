var Table = require("cli-table");
// var colour = require('colour');
// var mysql = require("mysql");
var connection = require("../db/connection");
var inquirer = require("inquirer");
// var questions = require("./questions");

var departmentTable = new Table({
    head: ['ID', 'Department'],
    colWidths: [20, 50]
});
var department = {
    displayAllDepartments: async function() {
        await connection.query('SELECT * FROM department', function(err, res) {
            if (err) throw err;
            else {
                res.forEach(id => {
                    departmentTable.push(
                        [id.id, id.department_name]
                    );
                })
            }

            console.log(`\n` + `\n` + "Department Details".green.underline)
            console.log(`\n` + departmentTable.toString());
        });
    },
    addDepartment: function(newD) {
        console.log("Inserting a new department name...\n");
        var query = connection.query(
            "INSERT INTO department SET ?", newD,
            function(err, res) {
                if (err) throw err;
                console.log(newD.department_name + " department inserted!\n");
                // Call updateProduct AFTER the INSERT completes
                //updateProduct();
                // questions();
            }
        );
    },
    promptDepartment: async function() {
        const response = await inquirer.prompt([{
            name: 'department_name',
            message: 'Enter new Department',

        }, ])

        console.log(response)
        department.addDepartment(response);
    },

    deleteDepartment: async function(deleteD) {
        console.log('Deleteing Department..')
        var query = connection.query(
            "DELETE FROM department WHERE  ?", deleteD,
            function(err, res) {
                if (err) throw err; {
                    console.log(`${deleteD.department_name}  removed from Departments`)
                }
            }
        )
    },

    promptDelete: async function() {
        const res = await inquirer.prompt([{
            name: 'department_name',
            message: 'Enter  Department to be deleted',

        }, ])
        console.log(res)
        department.deleteDepartment(res)
    },
}

module.exports = department;
// department.promptDelete()

//     updateDepartment: async function(oldDpt, newDpt, id) {
//         console.log("Updating departmaent..\n");
//         var query = connection.query("UPDATE products SET ? WHERE ?", oldDpt, newDpt, id,
//             function(err, res) {
//                 if (err) throw (err);
//                 console.log("Department updated! \n");

//             });
//     },
//     promptUpdates: async function() {
//         const response = await inquirer.prompt([{
//                 name: 'department_name',
//                 message: 'Enter update old value',
//             },
//             {

//                 name: 'department_name',
//                 message: "Enter new value",
//             },
//             {
//                 name: 'id',
//                 message: 'Enter department id'
//             }
//         ])

//         console.log(response)
//         department.updateDepartment(response);
//     },
// }