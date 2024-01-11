import mongoose from "mongoose";

import { databaseMongo } from "../config/config";

(async () => {

    try {

        const connection = await mongoose.connect(`mongodb://localhost/${databaseMongo}`)

        if(connection.STATES.connected) {
            console.log("MongoDB is running");
        }
        
        
    } catch (error) {
        console.log(error);
    }

})()