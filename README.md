# nodeJSMysqlSample

# Sample database data access app.

Simple demonstration on reading data from MYSQL/MariaDB using NodeJS/Typescript.

test database image inside folder database.

database details inside src/mysqlConfig.

database version 10.2.9-MariaDB

## NPM COMMANDS:
npm run bnt

    -Runs build and test (Compiles typescript into javascript in jsBuilt)
    
    -tests are testing the test database. Some tests may fail if database contents is manually modified.

npm start

    -runs the commands in app.js


## Basic operation:
    To use:
    
     -Run NPM INSTALL
     -Import the database image by creating an empty database called CRM, then:
     
        Mysql –u <username> -p <databasename> < <exportfilename>.sql
        
        username and pass are in th dbconfig file inside of /src/.
        filename = exportTestDatabase.sql
        
       -npm bnt to build and ensure unit tests pass.
       -npm start to run the program demonstrating extraction from SQL database into CSV file in outputs folder.

## TODO:

    -provide user interface to select which query to perform
    
    -adapt test files to generate consitent entries before testing for more robust testing.
    
    -Add more queries
    
    -Allow my dynamic querying/search by customer name etc.
    
    -allow output csv in custom locations.
    
    -add more export modules (HTML/databaseMigration/pdf).


