import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.model.js';
import Ticket from './ticket.model.js';
import Event from './event.model.js';


const Registration = sequelize.define('Registration', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  eventId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Events',
      key: 'id',
    },
  },
  ticketId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Tickets',
      key: 'id',
    },
  },
});

export default Registration;
