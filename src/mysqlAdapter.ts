declare function require(name: string);

import { crmPort } from './main';

var mysql = require('mysql');

export class mysqlAdapter implements crmPort {

    private con;

    constructor(mysqlConfigurationObject) {
        this.createDBconnection(mysqlConfigurationObject).then((data) => {
            this.con = data;
        })
    }

    private createDBconnection(dbconfigOjbect) {
        var con = mysql.createConnection(dbconfigOjbect, { multipleStatements: true });

        return new Promise((resolve, reject) => {
            con.connect((err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                resolve(con);
            })
        })
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
        }
    }

    public getCon() {
        return this.con;
    }

    runQuery(query: string) {
        return new Promise((resolve, reject) => {
            if (this.con) {
                var sql = query;

                this.con.query(sql, (err, result) => {

                    if (err) {
                        if (err.errno == 1054) {
                            console.log("Requested field not found");
                            resolve();
                        } else {
                            console.log(err);
                            reject(err);
                        }
                    }
                    resolve(result);
                })
            }
        })
    }
}