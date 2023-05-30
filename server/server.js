import dotenv from 'dotenv';
import colors from "colors";
import mongoose from 'mongoose';
import app from './app.js';
dotenv.config();
const PORT = process.env.PORT || 3001;


const connection = mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    retryWrites: true,
});

connection
    .then(() => {
        app.listen(PORT, () =>
            console.log(
                `${colors.cyan(
                    "[server]"
                )} Server running. Use our API on port: ${PORT}`
            )
        );
    })
    .catch((error) => {
        console.log(`${colors.green("[database]")} ${colors.red(error.message)}`);
        process.exit(1);
    });
