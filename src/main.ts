export interface crmPort {

    getONEcustomersQuotes(id: string, fieldList: string[]);
    getALLQuotes(fieldList: string[]);
    getXcustomerQuotes(amount: number, fieldList: string[]);
}

export interface outputPort {
    displayAll(outputOjbect);
}

export class main {

    private crmdbModule;
    private outputOperator;

    constructor(database: crmPort, outputOperator: outputPort) {
        this.crmdbModule = database;
        this.outputOperator = outputOperator;
    }



    public ListAllQuotes() {

        this.crmdbModule.getALLQuotes(
            ['customers.companyName,tenders.tenderID,tenders.tenderValue']).then((result) => {
                this.synthesiseResult(result);
            })
    }

    public ListAllQuotesToCustomer(customerID: string) {
        this.crmdbModule.getONEcustomersQuotes(customerID,
            ['customers.companyName,tenders.tenderID,tenders.tenderValue']).then((result) => {
                this.synthesiseResult(result);
            })

    }

    public ListTopQuotes(quoteNumber: string) {
        this.crmdbModule.getXcustomerQuotes(quoteNumber,
            ['customers.companyName,tenders.tenderID,tenders.tenderValue']).then((result) => {
                this.synthesiseResult(result);
            })
    }

    private synthesiseResult(dataObject) {
        this.outputOperator.displayAll(dataObject);
    }


}