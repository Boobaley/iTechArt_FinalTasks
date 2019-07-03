import React, { Component } from 'react';
import SingleFilmPage from '../views/SingleFilm/SingleFilmPage';
import { connect } from 'react-redux';
import { getFilm } from '../redux/actions/actionCreator';
import { Spinner } from '../views/Spinner/Spinner';

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
    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        return (
           <SingleFilmPage film={this.props.film}/>  
        );
    }
}


export default connect(mapStateToProps, { getFilm })(SingleFilmContainer);