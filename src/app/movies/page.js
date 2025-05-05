import Link from "next/link"
import stuff from "../../data/data.json"

export default function Movies() {

    return (
        <>
            {
                stuff.Search.map((search) => (
                    <Link key={search.imdbID} href={`/movies/${search.imdbID}`}>
                        <div>
                            <img src={search.Poster}/>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}