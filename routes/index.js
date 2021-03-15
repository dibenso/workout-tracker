const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  res.json({ message: "Hello World!" });
});

router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;

  res.json({ id });
});

router.post("/api/workouts", (req, res) => {
  res.json({ workout: req.body });
});

module.exports = router;
