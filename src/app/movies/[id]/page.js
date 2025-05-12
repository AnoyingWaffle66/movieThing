"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Movie from "../movie"
import "./page.css"

export default function MovieID({ params }) {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        let url = `/api/movies/${id}`
        fetch(url)
        .then(r => r.json())
        .then(data => setMovie(data))
    }, [])

    if (!movie) {
        return (
            <>Loading Movie...</>
        )
    }
    return (
        <div>
            <Movie search={movie}/>
            <p>imdbID - {id}</p>
        </div>
    )
}