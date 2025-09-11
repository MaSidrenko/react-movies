import React from "react";
import './Seacrh.css';
import { type } from "@testing-library/user-event/dist/type";

class Seacrh extends React.Component {
    state = {
        search: "",
        type: "all",
        page: 1
    }
    prevPage = () => {
        this.setState
            (
                () => (this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 }),
                () => { this.props.searchMovie(this.state.search === "" ? "harry_potter" : this.state.search, this.state.type, this.state.page) }
            )
    }
    nextPage = () => {
        this.setState(
            () => ({ page: this.state.page + 1 }),
            () => { this.props.searchMovie(this.state.search === "" ? "harry_potter" : this.state.search, this.state.type, this.state.page) }
        )
    }
    handleKey = (e) => {
        if (e.key === 'Enter')
            this.props.searchMovie(this.state.search , this.state.type);
    }
    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => { this.props.searchMovie(this.state.search, this.state.type) }
        );
    }
    setPage = (num) => {
        this.setState(
            () => ({ page: num }),
            () => { this.props.searchMovie(this.state.search === "" ? "harry_potter" : this.state.search , this.state.type, this.state.page); }
        );
    }
    render() {
        let limit = 10;
        let totalPages = Math.ceil(this.props.totalCount / limit);
        const lastIndex = totalPages <= 10 ? totalPages + 1 : this.state.page + limit;
        const firstIndex = totalPages <= 10 ? lastIndex - limit + lastIndex + 1 : lastIndex - limit;
        let num = [];
        for (let i = 0; i < totalPages + 1; i++) {
            num.push(i);
        }
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
                <div className="navigation">
                    <button className="btn" onClick={this.prevPage}>Previous</button>
                    <div>
                        {
                            num.slice(firstIndex, lastIndex).map(
                                (el, index) => (
                                    <button
                                        className="btn"
                                        style={{ background: this.state.page !== el ? "grey" : "" }}
                                        key={index}
                                        // onСlick={() => this.setPage(el)}
                                        onClick={() => this.setPage(el)}
                                    >
                                        {el}
                                    </button>
                                )
                            )
                        }
                    </div>
                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>
            </div >

        )
    }
}

export default Seacrh