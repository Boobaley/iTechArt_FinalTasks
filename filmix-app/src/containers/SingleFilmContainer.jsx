import React, { Component } from 'react';
import SingleFilmPage from '../views/SingleFilm/SingleFilmPage';
import { connect } from 'react-redux';
import { getFilm } from '../redux/actions/actionCreator';

const mapStateToProps = state => {
    return {
        film: state.films.film
    }
}
class SingleFilmContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const filmId = this.props.match.params.filmId;
        this.props.getFilm(filmId);
    }
    render() {
        return (
           <SingleFilmPage film={this.props.film}/>  
        );
    }
}

export default connect(mapStateToProps, { getFilm })(SingleFilmContainer);