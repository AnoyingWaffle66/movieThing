import movies from "../../../data/data.json"

export async function GET(request) {
    let stuff = movies
    return new Response(JSON.stringify(stuff.Search), {
        status: 200,
        headers: {
            "content-type" : "application/json"
        }
    })
}