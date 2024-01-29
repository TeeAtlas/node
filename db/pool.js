import pg from 'pg'

const { Pool } = pg;


// if you leave poop params empty .env will populate the pool oject 
export const pool = new Pool()
