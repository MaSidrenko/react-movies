import React from "react";
import './Main.css';
import MovieList from "../../components/movielist/MovieList";
import Preloader from "../../components/preloader/Preloader";
import Search from "../../components/search/Search";
import Pagination from "../../components/pagination/Pagination";
class Main extends React.Component {
    state = { movies: [], loading: false, type: "all" };
    componentDidMount() {
        fetch('https://omdbapi.com/?apikey=cbeeaf27&s=harry_potter')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));

    }
    searchMovie = (str, type = 'all') => {
        console.log(str, type)
        // this.setState({ movies: [] });
        this.setState({ loading: true });
        fetch(`https://omdbapi.com/?apikey=cbeeaf27&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(
                data => {
                    if (data.Response === "True")
                        this.setState({ movies: data.Search, loading: false });
                    else
                        this.setState({ movies: [], loading: false });
                });

    }
    render() {
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />
                    {
                        !this.state.loading && //this.state.movies.length &&
                        (this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />)
                    }
                </div>
                <div>
                    <Pagination pages={this.state.movies.length}></Pagination>
                    {/* <Pagination pages={this.props.movies.lenght}></Pagination> */}
                </div>
            </div>
        )
    }
}

export default Main;