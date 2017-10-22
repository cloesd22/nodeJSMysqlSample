var chai = require('chai');
var expect = chai.expect;
var csv = require('../jsBuilt/outputCSV').outputCSV;
var fs = require('fs');



describe('CSV output', (params) => {

    var outputModule = new csv();


    it('should generate an array of fields given an output object', () => {
        const dataObject = [{ "test1": 34, "test2": 32, "test3": 34, "test4": 32 },
                            { "test1": 34, "test2": 32, "test3": 34, "test4": 32 }];
        let result = outputModule.generateFieldList(dataObject);
        expect(result.length).to.be.equal(4);
        expect(result[0]).to.be.equal("test1");
        expect(result[1]).to.be.equal("test2");
        expect(result[2]).to.be.equal("test3");
        expect(result[3]).to.be.equal("test4");
    })

    it('should correctly produce 0 field length for 0 values',() => {
        const dataObject = [];

        let result = outputModule.generateFieldList(dataObject);
        expect(result.length).to.be.equal(0);
    })

    it('should correctly generate a CSV file in the output directory',() => {

        const dataObject = [{ "test1": 34, "test2": 32, "test3": 34, "test4": 32 },
        { "test1": 34, "test2": 32, "test3": 34, "test4": 32 }];

        outputModule.displayAll(dataObject);
        
        if(fs.existsSync('./output/results.csv')){
            expect(1).to.be.equal(1);
        }else{
            throw new Error("File not created");
        }

    })


})