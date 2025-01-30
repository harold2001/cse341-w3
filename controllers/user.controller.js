import { ObjectId } from 'mongodb';
import { getDb } from '../database/connect.js';

const getUsers = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const result = await getDb().db().collection('users').find({});
    result.toArray().then(users => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(users);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const getUserById = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);
    const result = await getDb().db().collection('users').find({ _id: userId });
    result.toArray().then(users => {
      if (users.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(users[0]);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const createUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const { firstName, lastName, email, phone, address, age, isActive } =
      req.body;

    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      address,
      age,
      isActive,
    };

    const result = await getDb().db().collection('users').insertOne(newUser);

    if (result.acknowledged) {
      return res.status(201).json({ message: 'User created', data: newUser });
    }

    res.status(500).json({ message: 'Error creating user' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const updateUserById = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);

    const updatedUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      age: req.body.age,
      isActive: req.body.isActive,
    };

    const result = await getDb()
      .db()
      .collection('users')
      .findOneAndReplace({ _id: userId }, updatedUser, {
        returnDocument: 'after',
      });

    if (result) {
      return res.status(200).json({ message: 'User updated', data: result });
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const deleteUserById = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);
    const result = await getDb().db().collection('users').findOneAndDelete(
      { _id: userId },
      {
        returnDocument: 'after',
      }
    );

    if (result) {
      return res.status(200).json({ message: 'User deleted', data: result });
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
