
var chai = require('chai');
var expect = chai.expect;
var dbconfig = require('../src/mysqlConfig.json');
var mysqlAdapter = require('../jsBuilt/mysqlAdapter').mysqlAdapter;


var dbAdappter = new mysqlAdapter(dbconfig);

describe('database diagnostics', () => {

    it('should connect to the database succesfully', (done) => {
        var con = dbAdappter.getCon();
        expect(con).to.not.be.undefined;
        done();
    })

    describe('get ONE customer with specified fields', () => {

        it('should be able to extract requested fields on a specific customer', (done) => {

            dbAdappter.getONEcustomersQuotes('3',
                ['customers.companyName,customers.companyWorth','customers.noEmployees,tenders.tenderValue']).then((result) => {


                    expect(result[1].companyName).to.be.equal('companyC');
                    expect(result[1].companyWorth).to.be.equal(1000000000);
                    expect(result[1].noEmployees).to.be.equal(400);
                    expect(result[1].tenderValue).to.be.equal(200);

                    expect(result[0].companyName).to.be.equal('companyC');
                    expect(result[0].companyWorth).to.be.equal(1000000000);
                    expect(result[0].noEmployees).to.be.equal(400);
                    expect(result[0].tenderValue).to.be.equal(500);

                    done();
                })
        })

        it('it should return no value if customer ID is not in database', (done) => {

            dbAdappter.getONEcustomersQuotes('4', ['customers.companyName,customers.companyWorth', 'customers.noEmployees']).then((result) => {
                expect(result.length).to.be.equal(0);
                done();
            })
        })

        it('it should display error if a requested field does not exist, without crashing', (done) => {

            dbAdappter.getONEcustomersQuotes('3', ['customers.age,customers.companyWorth', 'customers.noEmployees']).then((result) => {

                if (result == undefined) {
                    done();
                }

            })
        })


    })



    describe('get ALL customers with specified fields', () => {

        it('should be able to extract requested fields from a table', (done) => {

            dbAdappter.getALLQuotes(
                ['customers.companyName,customers.companyWorth,tenders.tenderValue',
                    'customers.noEmployees']).then((result) => {


                        expect(result[4].companyName).to.be.equal('companyA');
                        expect(result[4].companyWorth).to.be.equal(2000000);
                        expect(result[4].noEmployees).to.be.equal(15);
                        expect(result[4].tenderValue).to.be.equal(50);

                        expect(result[1].companyName).to.be.equal('companyA');
                        expect(result[1].companyWorth).to.be.equal(2000000);
                        expect(result[1].noEmployees).to.be.equal(15);
                        expect(result[1].tenderValue).to.be.equal(400);

                        expect(result[3].companyName).to.be.equal('companyB');
                        expect(result[3].companyWorth).to.be.equal(23000000);
                        expect(result[3].noEmployees).to.be.equal(45);
                        expect(result[3].tenderValue).to.be.equal(150);

                        expect(result[2].companyName).to.be.equal('companyC');
                        expect(result[2].companyWorth).to.be.equal(1000000000);
                        expect(result[2].noEmployees).to.be.equal(400);
                        expect(result[2].tenderValue).to.be.equal(200);

                        expect(result[0].companyName).to.be.equal('companyC');
                        expect(result[0].companyWorth).to.be.equal(1000000000);
                        expect(result[0].noEmployees).to.be.equal(400);
                        expect(result[0].tenderValue).to.be.equal(500);
                        done();
                    })
        })

        it('it should display error if a requested field does not exist, without crashing', (done) => {

            dbAdappter.getALLQuotes(['customers.age,customers.companyWorth', 'customers.noEmployees']).then((result) => {

                if (result == undefined) {
                    done();
                }

            })
        })
    })

    describe('get X customers with specified fields', () => {

        it('should return the most valuable X customer Quotes', (done) => {

            dbAdappter.getXcustomerQuotes(3,
                ['customers.companyName,customers.companyWorth,tenders.tenderValue', 'customers.noEmployees']
            )
                .then((result) => {
                    expect(result.length).to.be.equal(3);

                    expect(result[0].companyName).to.be.equal('companyC');
                    expect(result[0].companyWorth).to.be.equal(1000000000);
                    expect(result[0].noEmployees).to.be.equal(400);
                    expect(result[0].tenderValue).to.be.equal(500);

                    expect(result[1].companyName).to.be.equal('companyA');
                    expect(result[1].companyWorth).to.be.equal(2000000);
                    expect(result[1].noEmployees).to.be.equal(15);
                    expect(result[1].tenderValue).to.be.equal(400);

                    expect(result[2].companyName).to.be.equal('companyC');
                    expect(result[2].companyWorth).to.be.equal(1000000000);
                    expect(result[2].noEmployees).to.be.equal(400);
                    expect(result[2].tenderValue).to.be.equal(200);
                    done();
                })
        })

        it('it should display error if a requested field does not exist, without crashing', (done) => {

            dbAdappter.getXcustomerQuotes(3,['customers.age,customers.companyWorth', 'customers.noEmployees']).then((result) => {

                if (result == undefined) {
                    done();
                }

            })
        })
    })

})




