"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poolBuilder = require('./sqlConnectionPool').poolBuilder;
var mysqlAdapter = /** @class */ (function () {
    function mysqlAdapter(mysqlConfigurationObject) {
        this.con = new poolBuilder(mysqlConfigurationObject).getPool();
    }
    mysqlAdapter.prototype.getONEcustomersQuotes = function (id, fieldList) {
        //gets requested fields about one customer.
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                        tenders ON customers.companyID=tenders.companyID \n                        WHERE customers.companyID=" + id + " \n                        ORDER BY tenders.tenderValue DESC;";
            return this.runQuery(sql);
        }
        else {
            console.log("No database Connection");
        }
    };
    mysqlAdapter.prototype.getALLQuotes = function (fieldList) {
        //gets requested fields about all customers in the database.
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                        tenders ON customers.companyID=tenders.companyID \n                        ORDER BY tenders.tenderValue DESC;";
            return this.runQuery(sql);
        }
        else {
            console.log("No database Connection");
        }
    };
    mysqlAdapter.prototype.getXcustomerQuotes = function (amount, fieldList) {
        // gets requested fields 
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                        tenders ON customers.companyID=tenders.companyID \n                        ORDER BY tenders.tenderValue DESC LIMIT " + amount;
            return this.runQuery(sql);
        }
        else {
            console.log("No database Connection");
        }
    };
    mysqlAdapter.prototype.getCon = function () {
        return this.con;
    };
    mysqlAdapter.prototype.closeCon = function () {
        this.con.end();
    };
    mysqlAdapter.prototype.runQuery = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.con.getConnection(function (err, connection) {
                if (err) {
                    connection.release();
                    throw err;
                }
                connection.query(query, function (err, result) {
                    connection.release();
                    if (!err) {
                        resolve(result);
                    }
                    else {
                        console.log("Error executing query -" + err);
                        resolve();
                    }
                });
                connection.on('error', function (err) {
                    reject();
                    throw err;
                });
            });
        });
    };
    return mysqlAdapter;
}());
exports.mysqlAdapter = mysqlAdapter;
