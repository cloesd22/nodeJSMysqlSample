declare function require(name: string);

import { crmPort } from './main';

var poolBuilder = require('./sqlConnectionPool').poolBuilder;

export class mysqlAdapter implements crmPort {

    private con;

    constructor(mysqlConfigurationObject) {
        this.con = new poolBuilder(mysqlConfigurationObject).getPool();
    }

    getONEcustomersQuotes(id: string, fieldList: string[]) {
        //gets requested fields about one customer.
        if (this.con) {

            var fieldlist = fieldList.join(",");

            var sql = `SELECT ${fieldlist} FROM customers JOIN
                        tenders ON customers.companyID=tenders.companyID 
                        WHERE customers.companyID=${id} 
                        ORDER BY tenders.tenderValue DESC;`

            return this.runQuery(sql);
        } else {
            console.log("No database Connection");
        }
    }

    getALLQuotes(fieldList: string[]) {
        //gets requested fields about all customers in the database.
        if (this.con) {

            var fieldlist = fieldList.join(",");
            var sql = `SELECT ${fieldlist} FROM customers JOIN
                        tenders ON customers.companyID=tenders.companyID 
                        ORDER BY tenders.tenderValue DESC;`

            return this.runQuery(sql);
        } else {
            console.log("No database Connection");
        }
    }

    getXcustomerQuotes(amount: number, fieldList: string[]) {
        // gets requested fields 
        if (this.con) {
            var fieldlist = fieldList.join(",");

            var sql = `SELECT ${fieldlist} FROM customers JOIN
                        tenders ON customers.companyID=tenders.companyID 
                        ORDER BY tenders.tenderValue DESC LIMIT ${amount}`
            return this.runQuery(sql);
        } else {
            console.log("No database Connection");
        }


    }

    public getCon() {
        return this.con;
    }

    public closeCon() {
        this.con.end();
    }

    runQuery(query: string) {
        return new Promise((resolve, reject) => {

            this.con.getConnection((err, connection) => {
                if (err) {
                    connection.release();
                    throw err;
                }

                connection.query(query, (err,result) => {

                    connection.release();
                    if (!err) {
                        resolve(result);
                    }else{
                        console.log("Error executing query -"+err);
                        resolve();
                    }
                    
                })

                connection.on('error', (err) => {
                    reject();
                    throw err;
                })
            })

        })
    }
}