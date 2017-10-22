
declare function require(name: string);
declare var __dirname;

var csv = require('json2csv');
import { outputPort } from './main';
var fs = require('fs');

export class outputCSV implements outputPort {


    displayAll(outputOjbect: any) {
        const fields = this.generateFieldList(outputOjbect);

        try {

            var result = csv({ data: outputOjbect, fields: fields });

            fs.writeFile('./output/results.csv', result, (error) => {
                if (error) {
                    throw error;
                }
                console.log("saved");
            })

        } catch (error) {
            console.log(error);
        }

    }

    createOutputObject(name: String) {

    }

    generateFieldList(dataObject: object[]) {
        var fieldArray = [];

        try {
            Object.keys(dataObject[0]).forEach(key => {
                fieldArray.push(key);
            });
        } catch (error) {
            console.log("No fields");
            
        }



        return fieldArray;
    }


}