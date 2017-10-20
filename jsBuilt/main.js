"use strict";
//TODO:
// CHANGE THE MYSQL ADAPTERS TEST TO REFER TO 'QUOTES'
// FINISH THE TEST FOR THE GET X FROM
// THINK OF A FEW MORE TESTS
// SETUP THE MAIN CLASS
// SET UP THE PDF PARSER
Object.defineProperty(exports, "__esModule", { value: true });
var main = /** @class */ (function () {
    function main(crmdbModule, outputOperator) {
        this.crmdbModule = crmdbModule;
        this.outputOperator = outputOperator;
    }
    main.prototype.listALLCustomerTranasctions = function (identifier) {
        //takes in an identifier object that can be any field
        //calls findbyXcustomer object
        //pulls customer data, 
        //creates an object which is is customer data, and transactions nested;
        //calls export module to dispense object.
    };
    main.prototype.findCustomer = function (identifier) {
        //takes in an identifier object that can be any field
        //calls findbyXcustomer object
        //returns customerObject
    };
    main.prototype.findTransactionList = function (customerObject) {
        //takes in customer object
        //pulls all transactions for that customer
        //returns object containing customer, and transactions.
    };
    main.prototype.synthesiseResult = function (customerobject, transactionobject) {
        //builds an object that neatly parses the customer information
        //and returns an object to be sent to the export module.
    };
    return main;
}());
