export interface crmPort{

    getONEcustomersQuotes(id:string,fieldList:string[]);
    getALLQuotes(fieldList:string[]);
    getXcustomerQuotes(amount:number,fieldList: string[]);
}

export interface outputPort{
    displayAll(outputOjbect);
}

class main{

    private crmdbModule;
    private outputOperator;

    constructor(crmdbModule:crmPort,outputOperator:outputPort){
        this.crmdbModule = crmdbModule;
        this.outputOperator = outputOperator;
    }


    public ListAllQuotes(){
        var result = this.crmdbModule.getALLQuotes(
            ['company.name,tenders.tenderID,tenders.tenderValue']);
        this.synthesiseResult(result);
    }

    public ListAllQuotesToCustomer(customerID:number){
        var result = this.crmdbModule.getONEcustomersQuotes(customerID,
            ['company.name,tenders.tenderID,tenders.tenderValue']);
        this.synthesiseResult(result);
    }

    public ListTopQuotes(quoteNumber:number){
        var result = this.crmdbModule.getXcustomerQuotes(quoteNumber,
            ['company.name,tenders.tenderID,tenders.tenderValue']);
        this.synthesiseResult(result);
    }

    private synthesiseResult(dataObject){
        this.outputOperator.displayAll(dataObject);
    }


}