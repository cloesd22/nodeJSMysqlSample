declare function require(name:string);
declare var module;

var mysql = require('mysql');



export class poolBuilder{

    private pool;
    constructor(dbconfig){
        this.pool = mysql.createPool(dbconfig);
    }

    public getPool(){
        return this.pool;
    }

}


