const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  type: "String",
  name: "String",
  distance: "Number",
  duration: "Number",
  weight: "Number",
  reps: "Number",
  sets: "Number"
});
const WorkoutSchema = new mongoose.Schema({ day: Date, exercises: [ExerciseSchema] });
const Workout = new mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
