var mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var colour = require('colour');
var inquirer = require("inquirer");
var figlet = require('figlet');
var questions = require("./lib/questions")
var connection = require("./db/connection")
var Table = require("cli-table")
var department = require("./lib/department")

function title() {
    figlet('Employee Manager', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }

        console.log(data.blue)
        questions()
    });

}

title()
    // questions()