//TODO:
    // CHANGE THE MYSQL ADAPTERS TEST TO REFER TO 'QUOTES'
    // FINISH THE TEST FOR THE GET X FROM
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


    public listALLCustomerTranasctions(identifier:{type:string,value:any}){
        //takes in an identifier object that can be any field
        //calls findbyXcustomer object
        //pulls customer data, 
        //creates an object which is is customer data, and transactions nested;
        //calls export module to dispense object.
    }

    private findCustomer(identifier){
        //takes in an identifier object that can be any field
        //calls findbyXcustomer object
        //returns customerObject
    }

    private findTransactionList(customerObject){
        //takes in customer object
        //pulls all transactions for that customer
        //returns object containing customer, and transactions.
    }  

    private synthesiseResult(customerobject,transactionobject){
        //builds an object that neatly parses the customer information
        //and returns an object to be sent to the export module.
    }


}