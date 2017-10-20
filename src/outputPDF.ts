//IN PROGRESS

declare function require(name: string);

var pdf = require('pdfkit');
var fs = require('fs');

import {outputPort} from './main';

class outputPDF implements outputPort{


    private outputDOC = new pdf;

    displayAll(outputOjbect: any) {
        throw new Error("Method not implemented.");
    }

    createOutputObject(name:String){
        this.outputDOC.pipe(fs.createWriteStream(name+'.pdf'));
    }

    addText(textLine:string){
        this.outputDOC.font('fonts/helvetica-Bold')
        .fontSize(25)
        .text(textLine)
    }

    stringParses(outputObject){
        var OutputString = "";
        outputObject.forEach(element => {
            
        });

    }
    
}