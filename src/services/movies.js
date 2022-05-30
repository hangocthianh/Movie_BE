"use strict";

const {Movie} = require("../models");

const getListMovies = async ()=>{
    try {
        const movies = await Movie.findAll();
        return movies;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const addMovie =async (movie)=>{
    try {
        const newMovie = await Movie.create(movie);
        return newMovie;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const checkExistMovieById = async (id)=>{
    try {
        const movie = await Movie.findOne({
            where:{id},
        })
        if(!movie){
            return false;
        }
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}
const deleteMovieById= async (id)=>{
    try {
        const movie = await Movie.destroy({
            where:{id},
        })
        return movie;
    } catch (error) {
        console.log(error);
        return false
    }
}
module.exports={
    getListMovies,
    addMovie,
    checkExistMovieById,
    deleteMovieById,

}