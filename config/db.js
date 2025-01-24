import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // 'event_management', // Database name
    // 'postgres',         // Database user
    // 'Shubh@m123',       // Database password
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false,
        
});
// console.log('Database Host:', process.env.DB_HOST);
// console.log('Database Name:', process.env.DB_NAME);
// console.log('Database User:', process.env.DB_USER);
// console.log('Database Password:', process.env.DB_PASSWORD);


export default sequelize;
