import { useState } from "react";
import Movie from "../movie/Movie.js";

import './MovieList.css';


function MovieList(props) {
    const [isStyled, setIsStyled] = useState(false);
    const { movies = [] } = props;
    return (
        <div>
            <label>

                <input type="radio"
                    name="styleSwitch"
                    onChange={() => setIsStyled(true)}
                    checked={isStyled} />
                Блок
            </label>
            <label>
                <input type="radio"
                name="styleSwitch"
                onChange={() => setIsStyled(false)}
                checked={!isStyled} />
                Список
            </label>
            <div className={isStyled ? "movies" : ""}>
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
            <div>
               
            </div>
        </div>
    )
}

export default MovieList;