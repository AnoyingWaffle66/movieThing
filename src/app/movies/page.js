"use client"
import Movie from "./movie.js"
import "./movie.css"
import { useEffect, useState } from "react"


export default function Movies() {
    const [movies, setMovies] = useState(null)
    const [filter, setFilter] = useState("")
    const [searchedMovies, setSearchedMovies] = useState(null)

    useEffect(() => {
        const url = "/api/movies"
        fetch(url)
            .then(r => r.json())
            .then(data => setMovies(data))
    }, [])

    useEffect(() => {
        if (!movies){
            return
        }
        if (filter != "") {
            let filteredMovies = movies.filter((movie) =>
                movie.Type.toLowerCase().includes(filter.toLowerCase())
                || movie.Title.toLowerCase().includes(filter.toLowerCase())
                || movie.Year.includes(filter.toLowerCase())
            )
            setSearchedMovies(filteredMovies)
        } else {
            setSearchedMovies(movies)
        }
    }, [filter, movies])

    if (!movies) {
        return (
            <>Loading movies...</>
        )
    }
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
                        searchedMovies?.map((search) => (
                            <Movie className="movie-grid-item" key={search.imdbID} search={search} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}