"use strict";

const express = require("express");
const {
  getListMovies,
  addMovie,
  checkExistMovieById,
  deleteMovieById,
  getMovieById,
  updateMovieById,
} = require("../services/movies");
const movieRouter = express.Router();
movieRouter.get("/", async (req, res) => {
  const movies = await getListMovies();
  if (!movies) {
    res.status(500).send("can not get movie list");
  }
  res.status(200).send(movies);
});

movieRouter.post("/add-movie", async (req, res) => {
  const {
    name,
    nameCode,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
    score,
  } = req.body;
  if (!name || !name.trim()) {
    res.status(400).send("Name is required");
  }
  const movie = await addMovie({
    name,
    nameCode,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
    score,
  });
  if (!movie) {
    res.status(500).send("Can not add movie");
  }
  res.status(201).send(movie);
});

movieRouter.delete("/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const isExist = await checkExistMovieById(movieId);
  if (!isExist) {
    res.status(404).send(`No exist Movie ${movieId}`);
  }
  const movie = await deleteMovieById(movieId);
  if (!movie) {
    res.status(500).send("Can not delete movie");
  }
  res.status(201).send(`movie id ${movieId} is deleted`);
});
movieRouter.get("/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const movie = await getMovieById(movieId);
  if (!movie) {
    res.status(500).send(`Movie ${movieId} is not exist`);
  }
  res.status(201).send(movie);
});

movieRouter.put("/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const {
    name,
    nameCode,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
    score,
  } = req.body;
  if (!name || !name.trim()) {
    res.status(400).send("name is required");
  }
  const isExist = await checkExistMovieById(movieId);
  if (!isExist) {
    res.status(404).send(`No exist Movie ${movieId}`);
  }
  const movie={
    name,
    nameCode,
    trailer,
    poster,
    description,
    startTime,
    evaluate,
    score
  }
  await updateMovieById(movieId, movie);
  res.status(201).send(movie);
});

module.exports = movieRouter;
