# nodeJSMysqlSample
Sample database data access app.

test database image inside folder database.
database details inside src/mysqlConfig.

database version 10.2.9-MariaDB

NPM COMMANDS:
npm run bnt
    Runs build and test (Compiles typescript into javascript in jsBuilt)
    tests are testing the test database. Some tests may fail if database contents is manually modified.

npm start
    runs the commands in app.js


Basic operation:
    running npm start will fetch data from the mysql database as specified by arguments
    and export that in csv format.

TODO:
    provide user interface to select which query to perform
    adapt test files to generate consitent entries before testing for more robust testing.
    Add more queries
    Allow my dynamic querying/search by customer name etc.
    allow output csv in custom locations.
    add more export modules (HTML/databaseMigration/pdf).
