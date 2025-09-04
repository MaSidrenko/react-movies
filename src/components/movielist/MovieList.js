import Movie from "../movie/Movie.js";
import './MovieList.css';

function MovieList(props) {

    const { movies = [] } = props;
    return (
        <div className="movies">
            {
                movies.map(
                    movie => {
                        return (
                            <Movie key={movie.imdbID} {...movie} />
                        )
                    }
                )
            }
        </div>
    )
}

export default MovieList;