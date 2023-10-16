const {Pool} = require('pg');
const connnectionInfo = `postgres://mywebappuser:password@localhost:5432/mywebapp`;
const pool = new Pool({connectionString: connnectionInfo});

pool.query(
    `SELECT first_name, last_name FROM bowlers WHERE consistency >= 80;`,
    [],
    function (err, result) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(result.rows);
        process.exit(0);
    }
);

//console.log(queryResults.result.rows);
//console.log(QR);