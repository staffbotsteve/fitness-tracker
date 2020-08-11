// Dependencies
const router = require("express").Router();
const db = require("../models/index.js");

// Gets workouts from MongoDB
router.get("/api/workouts", function (req, res) {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Gets workouts by range
router.get("/api/workouts/range", function (req, res) {
  db.Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Updates workouts by id
router.put("/api/workouts/:id", function (req, res) {
  db.Workout.updateOne(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create new workouts
router.post("/api/workouts", function (req, res) {
  db.Workout.create({
    day: new Date().setDate(new Date().getDate()),
  })
    .then((dbUpdate) => {
      res.json(dbUpdate);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
