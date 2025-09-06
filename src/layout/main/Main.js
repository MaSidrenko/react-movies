import React from "react";
import './Main.css';
import MovieList from "../../components/movielist/MovieList";
import Preloader from "../../components/preloader/Preloader";
class Main extends React.Component {
    state = { movies: [] };
    componentDidMount() {
        fetch('https://omdbapi.com/?apikey=cbeeaf27&s=harry_potter')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}));

    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    {
                        this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />
                    }
                </div>
            </div>
        )
    }
}

export default Main;