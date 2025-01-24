import * as userService from '../services/user.service.js';

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    // In getAllUsers, you throw 404 in the service layer when no users are found. The controller maps this to 500, which is incorrect.
    // Fix: Use 404 in the controller for "No users found" errors:
    res.status(error.message === 'No users found' ? 404 : 500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await userService.deleteUser(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { createUser, getUserById, getAllUsers, updateUser, deleteUser };
