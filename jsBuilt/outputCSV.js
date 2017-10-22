"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require('json2csv');
var fs = require('fs');
var outputCSV = /** @class */ (function () {
    function outputCSV() {
    }
    outputCSV.prototype.displayAll = function (outputOjbect) {
        var fields = this.generateFieldList(outputOjbect);
        try {
            var result = csv({ data: outputOjbect, fields: fields });
            fs.writeFile('./output/results.csv', result, function (error) {
                if (error) {
                    throw error;
                }
                console.log("saved");
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    outputCSV.prototype.createOutputObject = function (name) {
    };
    outputCSV.prototype.generateFieldList = function (dataObject) {
        var fieldArray = [];
        try {
            Object.keys(dataObject[0]).forEach(function (key) {
                fieldArray.push(key);
            });
        }
        catch (error) {
            console.log("No fields");
        }
        return fieldArray;
    };
    return outputCSV;
}());
exports.outputCSV = outputCSV;
