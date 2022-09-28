// instalar a biblioteca https://www.npmjs.com/package/mssql npm install mssql
const sql = require('mssql')
const sqlConfig = {
 server: "regulus.cotuca.unicamp.br",
  port: 1433,
  database: "BD21106",
  user: "bd21106",
  password: "BD21106",
    pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

// eslint-disable-next-line no-unused-expressions
async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result1 = await sql.query`select codCurso from Curso orderby id`
  console.dir(result1)
 } catch (err) {
  // ... error checks
 }
}
 
