"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var poolBuilder = /** @class */ (function () {
    function poolBuilder(dbconfig) {
        this.pool = mysql.createPool(dbconfig);
    }
    poolBuilder.prototype.getPool = function () {
        return this.pool;
    };
    return poolBuilder;
}());
exports.poolBuilder = poolBuilder;
