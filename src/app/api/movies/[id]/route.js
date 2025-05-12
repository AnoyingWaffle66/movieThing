import movies from "../../../../data/data.json"

export async function GET(request, {params}) {
    params = await params
    const {id} = await params

    let foundMovie = movies.Search.find(mov => mov.imdbID == id)

    if(!foundMovie) {
        return new Response(`Movie with id ${id} not found`, {
            status: 404
        })
    }

    return new Response(JSON.stringify(foundMovie), {
        status: 200,
        headers: {
            "content-type" : "application/json"
        }
    })
}