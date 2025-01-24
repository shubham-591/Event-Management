import User from '../models/user.model.js';

const createUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ where : {email: userData.email}});
    if(existingUser) {
      throw new Error('User with this email already exists');
    }

    // If the condition statement is not met, create a new user
    const user = await User.create(userData);
    return user;

  } catch (error) {
    // Log the error for debugging
    console.error('Error creating user:', error.message);
    throw error;
  }
}

const getUserById = async (id) => {
  try {
    // Finding the user by its Primary Key(Pk)
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error.message);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    // Fetch all users
    const users = await User.findAll();

    return users;

  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

const updateUser = async (id, updateData) => {
  try {

    const user = await User.findByPk(id);

    // Checking if the user whom we want to update exists or not
    if (!user) {
      throw new Error('User not found');
    }

    if(updateData.email) {
      const existingUser = await User.findOne({ where: {email: updateData.email}});
      
      if(existingUser && existingUser.id !== id) {
        throw new Error('User with this email already exists');
      }
    }

    await user.update(updateData);
    return user;

  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {

    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return { message: 'User deleted successfully' };

  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
};

export { createUser, getUserById, getAllUsers, updateUser, deleteUser };
