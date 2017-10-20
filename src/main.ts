//TODO:
    // THINK OF A FEW MORE TESTS
    // SETUP THE MAIN CLASS
    // SET UP THE PDF PARSER

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
        var result = this.crmdbModule.getALLQuotes();
        this.synthesiseResult(result);
    }

    public ListAllQuotesToCustomer(customerID:number){

    }

    public ListTopQuotes(quoteNumber:3){
        
    }

    private synthesiseResult(dataObject){
        //builds an object that neatly parses the customer information
        //and returns an object to be sent to the export module.
    }


}