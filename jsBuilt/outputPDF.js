"use strict";
//IN PROGRESS
Object.defineProperty(exports, "__esModule", { value: true });
var pdf = require('pdfkit');
var fs = require('fs');
var outputPDF = /** @class */ (function () {
    function outputPDF() {
        this.outputDOC = new pdf;
    }
    outputPDF.prototype.displayAll = function (outputOjbect) {
        throw new Error("Method not implemented.");
    };
    outputPDF.prototype.createOutputObject = function (name) {
        this.outputDOC.pipe(fs.createWriteStream(name + '.pdf'));
    };
    outputPDF.prototype.addText = function (textLine) {
        this.outputDOC.font('fonts/helvetica-Bold')
            .fontSize(25)
            .text(textLine);
    };
    outputPDF.prototype.stringParses = function (outputObject) {
        var OutputString = "";
        outputObject.forEach(function (element) {
        });
    };
    return outputPDF;
}());
