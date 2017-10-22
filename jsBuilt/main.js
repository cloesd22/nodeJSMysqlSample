"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main = /** @class */ (function () {
    function main(database, outputOperator) {
        this.crmdbModule = database;
        this.outputOperator = outputOperator;
    }
    main.prototype.ListAllQuotes = function () {
        var _this = this;
        this.crmdbModule.getALLQuotes(['customers.companyName,tenders.tenderID,tenders.tenderValue']).then(function (result) {
            _this.synthesiseResult(result);
        });
    };
    main.prototype.ListAllQuotesToCustomer = function (customerID) {
        var _this = this;
        this.crmdbModule.getONEcustomersQuotes(customerID, ['customers.companyName,tenders.tenderID,tenders.tenderValue']).then(function (result) {
            _this.synthesiseResult(result);
        });
    };
    main.prototype.ListTopQuotes = function (quoteNumber) {
        var _this = this;
        this.crmdbModule.getXcustomerQuotes(quoteNumber, ['customers.companyName,tenders.tenderID,tenders.tenderValue']).then(function (result) {
            _this.synthesiseResult(result);
        });
    };
    main.prototype.synthesiseResult = function (dataObject) {
        this.outputOperator.displayAll(dataObject);
    };
    return main;
}());
exports.main = main;
