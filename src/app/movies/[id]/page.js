import stuff from "../../../data/data.json"
import Movie from "../movie"

import "./page.css"

export default function MovieID({ params }) {
    let movie = stuff.Search.find(movie => movie.imdbID == params.id)
    return (
        <div>
            <Movie search={movie}/>
            <p>imdbID - {params.id}</p>
        </div>
    )
}