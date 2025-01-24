import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Event from './event.model.js';

const Ticket = sequelize.define('Ticket', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('general', 'vip', 'student'),
    defaultValue: 'general',
  },
  eventId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Events',
      key: 'id',
    },
  },
});

export default Ticket;
