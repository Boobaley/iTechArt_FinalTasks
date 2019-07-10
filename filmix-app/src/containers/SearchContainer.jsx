import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import{ Search } from '../views/Search/Search';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        loading: state.films.loading
    }
}

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerms: '',
            matches: []
        }
    }

    onInputChange = (e) => {
        this.setState({searchTerms: e.target.value});
        this.filterMovies(e.target.value);
    }

    filterMovies = (searchTerms) => {
        const filtered = this.props.films.filter(film => {
            return searchTerms && film.title.toLowerCase().startsWith(searchTerms.toLowerCase());
        });

        this.setState({matches: filtered});
    }

    renderMatches = () => {
        return this.state.matches.map((film, id) => {
            return (
                <div key={id}>
                    <div onClick={() => {
                            this.props.history.push(`/films/${film._id}`)
                        }
                    }>
                        {film.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <Search
                inputChange={this.onInputChange}
                filterMovies={this.filterMovies}
                renderMatches={this.renderMatches}
                searchTerms={this.state.searchTerms}
                matches={this.state.matches}
            />
        );
    }
}

export default withRouter(connect(mapStateToProps)(SearchContainer)) ;