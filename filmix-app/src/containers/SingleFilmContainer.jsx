import React, { Component } from 'react';
import SingleFilmPage from '../views/SingleFilm/SingleFilmPage';
import { connect } from 'react-redux';
import { getFilm } from '../redux/actions/actionCreator';
import { Spinner } from '../views/Spinner/Spinner';
import { ErrorPage } from '../views/Error/ErrorPage';

const mapStateToProps = state => {
    return {
        film: state.films.film,
        loading: state.films.loading
    }
}
class SingleFilmContainer extends Component {
    componentDidMount() {
        const { filmId } = this.props.match.params;
        this.props.getFilm(filmId);
    }

    shouldComponentUpdate(nexProps, nextState) {
        if (nexProps.location.pathname !== this.props.location.pathname) {
            const { filmId } = nexProps.match.params;
            return this.props.getFilm(filmId);
        }
        return true;
    }

    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        if (this.props.film.success === false) {
            return <ErrorPage/>
        }
        return (
           <SingleFilmPage film={this.props.film}/>  
        );
    }
}

export default connect(mapStateToProps, { getFilm })(SingleFilmContainer);