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

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;

  res.json({ id });
});

router.post("/api/workouts", (req, res) => {
  res.json({ workout: req.body });
});

module.exports = router;
