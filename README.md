# employeeManager
A command-line application to manage and update employee records

## Introduction
 Use this app to perform simple tasks to view, add, update, and remove employees, roles, and departments.
 
## Technologies used
- Node.js
- MySql
- NPM Inquirer
- NPM cli Table and colors

## Installation

**Note.js** and **MySQL** is required in order to run this script.

1. Download or clone this repository into your local computer.
2. In your MySQL client, run the ./db/employee.sql file to initialize the `Employee_Database` database 
(Optional  Run`./db/seeds.sql` for sample data.).Install required npm packages using the package.json.
3. Edit the `connection.js` file with your own credentials so the app can connect to your MySQL server.
Install required npm packages using the package.json.
## Usage

1. In your terminal, run the script with the command  `node server.js`.
2. You will be given multiple menu options to view, add,  and delete employees, roles, and departments.
3. You will be prompted with a questions to add details into the database.

## Preview

![Employee manager](employee.gif)
