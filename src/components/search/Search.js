import React from "react";
import './Seacrh.css';
import { type } from "@testing-library/user-event/dist/type";

class Seacrh extends React.Component {
    state = {
        search: "",
        // type: "all"
    }
    handleKey = (e) => {
        if (e.key === 'Enter')
            this.props.searchMovie(this.state.search, this.state.type);
    }
    handleFilter = (e) => {
        this.setState(
            () => ({type:e.target.dataset.type}),
            () => {this.props.searchMovie(this.state.search, this.state.type)}
        );
    }
    render() {
        return (
            <div>
                <div className="search">
                    <input
                        type="search"
                        placeholder="Введите название фильма"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn" onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                        Search</button>
                </div>
                <div className="radio">
                    <div><input type="radio" name="type" data-type="all" checked={this.state.type === 'all'} onChange={this.handleFilter} /> <span>All</span></div>
                    <div><input type="radio" name="type" data-type="movie" checked={this.state.type === 'movie'} onChange={this.handleFilter} /> <span>Movies</span></div>
                    <div><input type="radio" name="type" data-type="series" checked={this.state.type === 'series'} onChange={this.handleFilter} /> <span>Series</span></div>
                    <div><input type="radio" name="type" data-type="game" checked={this.state.type === 'game'} onChange={this.handleFilter} /> <span>Games</span></div>
                </div>
            </div>

        )
    }
}

export default Seacrh