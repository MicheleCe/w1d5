import React from "react";
import SingleFilm from "./SingleFilm";


class New extends React.Component {
    state = {
        loading: true,
        films: []
    }

    async componentDidMount() {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=960d9574&s=${this.props.search}`)
            if (response.ok) {
                let data = await response.json();
                console.log(data.Search);
                const filmOnly = data.Search.filter((film) => film.Type === "movie")
                this.setState({films: filmOnly.splice(0,6), loading: false})
                console.log(this.state.films);
            }
        } catch (error) {
            alert({error})
        }
        
    }
    render() {
        return <div className="text-white">{this.state.loading ? (<h3>loading...</h3>) : 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                { this.state.films.map(film => (
                    <SingleFilm key={film.imdbID} id={film.imdbID} src={film.Poster} title={film.Title}/>)
                )}
            </div>}
        </div>
    }
}


export default New