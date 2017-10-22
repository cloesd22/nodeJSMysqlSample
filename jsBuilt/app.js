"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbconfig = require('../src/mysqlConfig.json');
var main_1 = require("./main");
var mysqlAdapter_1 = require("./mysqlAdapter");
var outputCSV_1 = require("./outputCSV");
var crmReader = new mysqlAdapter_1.mysqlAdapter(dbconfig);
var outputModule = new outputCSV_1.outputCSV();
var app = new main_1.main(crmReader, outputModule);
app.ListAllQuotes();
