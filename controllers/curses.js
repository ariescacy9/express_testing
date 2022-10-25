// Import Curse Model
import Curse from "../models/curse.js";

// get que me traiga todos los schools
export const getCurses = async (req, res) => {
  try {
    const curse = await Curse.findAll();
    res.send(curse);
  } catch (err) {
    console.log(err);
  }
}

//get schools por Id:
export const getCurseById = async (req, res) => {
  try {
    const curse = await Curse.findByPk(req.params.id);
    if (!curse) {
      res.status(404).send({
        message: `No curse found with id ${req.params.id}`
      });
    }
    res.send(curse);
  } catch (err) {
    console.log(err);
  }
}

//crear un nuevo curse
export const createCurse = async (req, res) => {
  try {
    await Curse.create(req.body); //usamos el modelo y le pasamos el modelo que seria un json
    res.json({
      "message": "Curse Created",
    });
  } catch (err) {
    console.log(err);
  }
}

//modificar/actualizr un curse por id
export const updateCurse = async (req, res) => {
  try {
    const curse = await Curse.findByPk(req.params.id); //donde le llega por parametro 
    if (!curse) {
      res.status(404).send({
        message: `No curse found with id ${req.params.id}`
      });
      return;
    }
    await Curse.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Curse Updated"
    });
  } catch (err) {
    console.log(err);
  }
}

//borrar por id:
export const deleteCurse = async (req, res) => {
  try {
    const curse = await Curse.findByPk(req.params.id);
    if (!curse) {
      res.status(404).send({
        message: `No curse found with id ${req.params.id}`
      });
      return;
    }
    await Curse.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Curse Deleted"
    });
  } catch (err) {
    console.log(err);
  }
}