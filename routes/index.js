const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find({}).exec();

    res.json(workouts);
  } catch(error) {
    throw error;
  }
});

router.get("/api/workouts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const workout = await Workout.findById(id).exec();

    if(workout)
      res.json(workout);
    else
      res.sendStatus(404);
  } catch(error) {
    throw error;
  }
})

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;

  res.json({ id });
});

router.post("/api/workouts", (req, res) => {
  res.json({ workout: req.body });
});

module.exports = router;
