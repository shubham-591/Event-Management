import * as eventService from '../services/event.service.js';

const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const event = await eventService.getEventById(req.params.id);
        res.status(200).json(event);

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req.params.id, req.body);
        res.status(200).json(event);

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

const deleteEvent = async (req, res) => {
    try {
        const response = await eventService.deleteEvent(req.params.id);
        res.status(200).json(response);

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export { createEvent, getEventById, getAllEvents, updateEvent, deleteEvent };