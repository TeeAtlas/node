import pg from 'pg'

const { Pool } = pg;


// if you leave pool params empty  .env autopolulates the pool object
export const pool = new Pool();
