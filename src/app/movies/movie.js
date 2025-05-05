import Link from "next/link"

export default function Movie({search}) {
    return (
        <Link key={search.imdbID} href={`/movies/${search.imdbID}`} >
            <div>
                <img alt={`${search.Title} ${search.Year} poster`} src={search.Poster}/>
                <p>Title - {search.Title}</p>
                <p>Year - {search.Year}</p>
                <p>Type - {search.Type}</p>
            </div>
        </Link>
    )
}