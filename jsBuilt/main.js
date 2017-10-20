"use strict";
//TODO:
// THINK OF A FEW MORE TESTS
// SETUP THE MAIN CLASS
// SET UP THE PDF PARSER
Object.defineProperty(exports, "__esModule", { value: true });
var main = /** @class */ (function () {
    function main(crmdbModule, outputOperator) {
        this.crmdbModule = crmdbModule;
        this.outputOperator = outputOperator;
    }
    main.prototype.ListAllQuotes = function () {
        var result = this.crmdbModule.getALLQuotes();
        this.synthesiseResult(result);
    };
    main.prototype.ListAllQuotesToCustomer = function (customerID) {
    };
    main.prototype.ListTopQuotes = function (quoteNumber) {
    };
    main.prototype.synthesiseResult = function (dataObject) {
        //builds an object that neatly parses the customer information
        //and returns an object to be sent to the export module.
    };
    return main;
}());
