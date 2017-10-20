"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var mysqlAdapter = /** @class */ (function () {
    function mysqlAdapter(mysqlConfigurationObject) {
        var _this = this;
        this.createDBconnection(mysqlConfigurationObject).then(function (data) {
            _this.con = data;
        });
    }
    mysqlAdapter.prototype.createDBconnection = function (dbconfigOjbect) {
        var con = mysql.createConnection(dbconfigOjbect, { multipleStatements: true });
        return new Promise(function (resolve, reject) {
            con.connect(function (err) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                resolve(con);
            });
        });
    };
    mysqlAdapter.prototype.getONEcustomerObject = function (id, fieldList) {
        //gets requested fields about one customer.
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                        tenders ON customers.companyID=tenders.companyID \n                        WHERE customers.companyID=" + id + ";";
            return this.runQuery(sql);
        }
    };
    mysqlAdapter.prototype.getALLcustomerObjects = function (fieldList) {
        //gets requested fields about all customers in the database.
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                        tenders ON customers.companyID=tenders.companyID \n                        ORDER BY customers.companyID";
            return this.runQuery(sql);
        }
    };
    mysqlAdapter.prototype.getXcustomerOjbects = function (amount, fieldList) {
        // gets requesed fields 
        if (this.con) {
            var fieldlist = fieldList.join(",");
            var sql = "SELECT " + fieldlist + " FROM customers JOIN\n                       tenders ON customers.companyID=tenders.companyID \n                       ORDER BY customers.companyID LIMIT " + amount;
            return this.runQuery(sql);
        }
    };
    mysqlAdapter.prototype.getCon = function () {
        return this.con;
    };
    mysqlAdapter.prototype.runQuery = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.con) {
                var sql = query;
                _this.con.query(sql, function (err, result) {
                    if (err) {
                        if (err.errno == 1054) {
                            console.log("Requested field not found");
                            resolve();
                        }
                        else {
                            console.log(err);
                            reject(err);
                        }
                    }
                    resolve(result);
                });
            }
        });
    };
    return mysqlAdapter;
}());
exports.mysqlAdapter = mysqlAdapter;
