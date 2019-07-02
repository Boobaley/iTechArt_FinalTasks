import React, { Component } from 'react';
import SingleFilmPage from '../views/SingleFilm/SingleFilmPage';
// import { connect } from 'react-redux';
// import { getFilm } from '../redux/actions/actionCreator';

// const mapStateToProps = state => {
//     return {
//         film: state.films.film
//     }
// }
class SingleFilmContainer extends Component {
    componentDidMount() {
        const { filmId } = this.props.match.params;
        this.props.getFilm(filmId);
    }
    render() {
        return (
           <SingleFilmPage />  
        );
    }
}


export default connect(mapStateToProps, { getFilm })(SingleFilmContainer);