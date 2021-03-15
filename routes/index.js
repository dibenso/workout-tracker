const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ]).exec();

    res.json(workouts);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedWorkout = await Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } });
    
    if(updatedWorkout)
      res.json(updatedWorkout);
    else
      res.sendStatus(404);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const workout = new Workout({ day: new Date().setDate(new Date().getDate()) });
    await workout.save();

    res.json(workout);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const workouts = await Workout.find({
      day: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)
      }
    }).exec();

    res.json(workouts);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

router.get("/api/workouts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const workout = await Workout.findById(id);

    if(workout)
      res.json(workout);
    else
      res.sendStatus(404);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

module.exports = router;
