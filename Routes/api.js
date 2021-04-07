//Require router and workout.js model
const router = require("express").Router();
const db = require("../models");

//Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find().then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

//Get range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

//Create new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

//Find workout by ID and update
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      //Increase total duration by length of workout
      $inc: { totalDuration: req.body.duration },
      //Push to exercises array
      $push: { exercises: req.body }
    },
    { new: true }).then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });

});

//Export Router
module.exports = router;