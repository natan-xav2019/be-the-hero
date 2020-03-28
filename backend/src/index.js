const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
* Rota / recursos
*/
/*
* metodo HTTP:
*GET: Buscar uma informalção do back-end
*POST: criar uma informalção no back-end
*PUT: alterar uma informalção no back-end
*DELETE: Delete uma informação no back-end
*/

/*
*
* Tipos de parâentros
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: parâmetros utilizados para identificar recursos
* Requery Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Diver: SELECT * FORM users
 * query Builder: table('users').select('*').where()
 */


app.listen(3333);
