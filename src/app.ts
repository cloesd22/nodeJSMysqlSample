declare function require(name:string);

var dbconfig = require('../src/mysqlConfig.json');
import {main} from './main';
import {mysqlAdapter} from './mysqlAdapter';
import {outputCSV} from './outputCSV';

var crmReader = new mysqlAdapter(dbconfig);
var outputModule = new outputCSV();

var app = new main(crmReader,outputModule);

    //lists all quotes/tenders in the database.
app.ListAllQuotes();

    //lists all quotes to a particular customer given by customer ID as a string.
//app.ListAllQuotesToCustomer('3');

    //lists top X customers quotes, by value.
//app.ListTopQuotes('2');


