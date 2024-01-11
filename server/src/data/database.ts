import { Pool } from 'pg';

import { database, password, host, user } from '../config/config';

const connection = new Pool({
    database,
    password,
    host,
    user
})

connection.connect(() => {
    try {
        console.log("Database pg is running");
        return;
    } catch (error) {
        console.log(error);
    }
})

export default connection