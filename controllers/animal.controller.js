import { ObjectId } from 'mongodb';
import { getDb } from '../database/connect.js';

const getAnimals = async (req, res) => {
  // #swagger.tags = ['Animals']

  try {
    const result = await getDb().db().collection('animals').find({});
    result.toArray().then(animals => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(animals);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const getAnimalById = async (req, res) => {
  // #swagger.tags = ['Animals']
  try {
    const { id } = req.params;
    const animalId = new ObjectId(id);
    const result = await getDb()
      .db()
      .collection('animals')
      .find({ _id: animalId });
    result.toArray().then(animals => {
      if (animals.length === 0) {
        return res.status(404).json({ message: 'Animal not found' });
      }
      res.status(200).json(animals[0]);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const createAnimal = async (req, res) => {
  // #swagger.tags = ['Animals']
  try {
    const { name, species, age, color, weight, habitat, isEndangered } =
      req.body;

    if (
      !name ||
      !species ||
      age === undefined ||
      !color ||
      !weight ||
      !habitat ||
      isEndangered === undefined
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newAnimal = {
      name,
      species,
      age,
      color,
      weight,
      habitat,
      isEndangered,
    };

    const result = await getDb()
      .db()
      .collection('animals')
      .insertOne(newAnimal);

    if (result.acknowledged) {
      return res
        .status(201)
        .json({ message: 'Animal created', data: newAnimal });
    }

    res.status(500).json({ message: 'Error creating animal' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const updateAnimalById = async (req, res) => {
  // #swagger.tags = ['Animals']
  try {
    const { id } = req.params;
    const animalId = new ObjectId(id);

    const updatedAnimal = {
      name: req.body.name,
      species: req.body.species,
      age: req.body.age,
      color: req.body.color,
      weight: req.body.weight,
      habitat: req.body.habitat,
      isEndangered: req.body.isEndangered,
    };

    const result = await getDb()
      .db()
      .collection('animals')
      .findOneAndReplace({ _id: animalId }, updatedAnimal, {
        returnDocument: 'after',
      });

    if (result) {
      return res.status(200).json({ message: 'Animal updated', data: result });
    }

    res.status(404).json({ message: 'Animal not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const deleteAnimalById = async (req, res) => {
  // #swagger.tags = ['Animals']
  try {
    const { id } = req.params;
    const animalId = new ObjectId(id);
    const result = await getDb()
      .db()
      .collection('animals')
      .findOneAndDelete({ _id: animalId }, { returnDocument: 'after' });

    if (result) {
      return res.status(200).json({ message: 'Animal deleted', data: result });
    }

    res.status(404).json({ message: 'Animal not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

export default {
  getAnimals,
  getAnimalById,
  createAnimal,
  updateAnimalById,
  deleteAnimalById,
};
