"use client"
import stuff from "../../data/data.json"
import Movie from "./movie.js"
import "./movie.css"
import { useEffect, useState } from "react"


export default function Movies() {
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        setMovies(stuff.Search)
    },[])

    useEffect(() => {
        let filteredMovies = stuff.Search
        if (filter != "") {
            filteredMovies = stuff.Search.filter((movie) => 
                movie.Type.toLowerCase().includes(filter.toLowerCase()) 
                || movie.Title.toLowerCase().includes(filter.toLowerCase())
                || movie.Year.includes(filter.toLowerCase())
            )
        }
        setMovies(filteredMovies)
    }, [filter])

    return (
        <>
        <div className="flex justify-center">
            <input 
                className="border-5 border-blue-500 bg-gray-100 text-gray-800 p-2 text-lg w-1/3 rounded text-center" 
                type="text" 
                onChange={(e) => setFilter(e.target.value)} 
                value={filter}
                placeholder="Filter Movie (name, year, type)"
            />
        </div>
        <div className="movie-div">
            <div className="movie-grid">
                {
                    movies?.map((search) => (
                        <Movie className="movie-grid-item" key={search.imdbID} search={search}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}