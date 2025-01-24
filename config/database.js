import sequelize from "./db.js";   // Importing the sequelize object from the db.js file
import User from '../models/user.model.js';  // Import all your models here
import Event from '../models/event.model.js';  // Example of another model
import Speaker from '../models/speaker.model.js'; // Another model
import Ticket from '../models/ticket.model.js'; // Another model
import Registration from '../models/registration.model.js'; // Another model

// Define associations
// User.hasMany(Registration, { foreignKey: 'userId' });
// Registration.belongsTo(User, { foreignKey: 'userId' });

// Event.hasMany(Registration, { foreignKey: 'eventId' });
// Registration.belongsTo(Event, { foreignKey: 'eventId' });

// Event.hasMany(Ticket, { foreignKey: 'eventId' });
// Ticket.belongsTo(Event, { foreignKey: 'eventId' });

// Ticket.hasMany(Registration, { foreignKey: 'ticketId' });
// Registration.belongsTo(Ticket, { foreignKey: 'ticketId' }); 

const connectToDB = async () => {
    try {
        await sequelize.authenticate();  // Verifying the database connection
        console.log("Database connected successfully");

        await sequelize.sync({ alter : true });  // Synchronizing the model with the database
        console.log("Database synchronized successfully");
    } catch (error) {
        console.error("Error in connecting to the database", error);
    }
};

export default connectToDB;