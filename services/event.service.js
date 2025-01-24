import Event from '../models/event.model.js';

const createEvent = async (eventData) => {
  try {
    // Check if an event with the same name already exists
    const existingEvent = await Event.findOne({ where: { name: eventData.name } });
    if (existingEvent) {
      throw new Error('An event with this name already exists');
    }

    // Create the event
    const event = await Event.create(eventData);
    return event;

  } catch (error) {
    console.error('Error creating event:', error.message);
    throw error;
  }
};

const getEventById = async (id) => {
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;

  } catch (error) {
    console.error('Error fetching event:', error.message);
    throw error;
  }
};

const getAllEvents = async () => {
  try {
    const events = await Event.findAll();
    return events;

  } catch (error) {
    console.error('Error fetching events:', error.message);
    throw error;
  }
};

const updateEvent = async (id, updateData) => {
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error('Event not found');
    }

    // If updating the name, check if an event with the new name already exists
    if (updateData.name) {
      const existingEvent = await Event.findOne({ where: { name: updateData.name } });
      if (existingEvent && existingEvent.id !== id) {
        throw new Error('An event with this name already exists');
      }
    }

    await event.update(updateData);
    return event;

  } catch (error) {
    console.error('Error updating event:', error.message);
    throw error;
  }
};

const deleteEvent = async (id) => {
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error('Event not found');
    }

    await event.destroy();
    return { message: 'Event deleted successfully' };
    
  } catch (error) {
    console.error('Error deleting event:', error.message);
    throw error;
  }
};

export { createEvent, getEventById, getAllEvents, updateEvent, deleteEvent };
