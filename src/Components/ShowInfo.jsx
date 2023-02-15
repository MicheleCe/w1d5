import { useState, useEffect } from "react"

export default function ShowInfo({id}) {
    const [filmId, setFilmId] = useState(id);
    const [filmPlot, setFilmPlot] = useState(null)
    const [filmTitle, setFilmTitle] = useState(null)
    const [filmYear, setFilmYear] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {const response = await fetch(`http://www.omdbapi.com/?apikey=960d9574&i=${id}`)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Plot);
                setFilmPlot(data.Plot)
                setFilmTitle(data.Title)
                setFilmYear(data.Year)
                setIsLoading(false)
            }
            } catch (error) {
                console.log(error);
            }
        } 

        fetchData()
        console.log(filmId);
    }, [filmId])
    

    return <div className="mt-4"> {isLoading? (<h3>loading...</h3>) : 
        <>
            <p>{filmTitle}</p>
            <p>{filmPlot}</p>
            <p>{filmYear}</p>
        </>}
       
    </div>
}