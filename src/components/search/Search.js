import React from "react";
import './Seacrh.css';

class Seacrh extends React.Component {
    state = {
        search: ""
    }
    handleKey = (e) => {
        if (e.key === 'Enter')
            this.props.searchMovie(this.state.search, this.state.type);
    }
    render() {
        return (
            <div>
                <div className="search">
                    <input
                        type="search"
                        placeholder="ВВедите название фильма"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    {/* <button className="btn" onClick={this.props.searchMovie(this.state.search)}>
                        Search</button> */}
                </div>
            </div>
        )
    }
}

export default Seacrh