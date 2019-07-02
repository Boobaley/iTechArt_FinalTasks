import React, { Component } from 'react';
import FilmItem from '../../views/FilmItem/FilmItem';
import { connect } from 'react-redux';
import { getAllFilms } from '../../redux/actions/actionCreator';
import { styles } from './styles';
import FilterContainer from '../FilterContainer';
import{ withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    console.log(state.films)
    return {
        films: state.films.films
    }
}

class FilmCollectionContainer extends Component {

    componentDidMount() {
        this.props.getAllFilms();
    }

    handleRedirect = (id) => {
        this.props.history.replace(`/films/${id}`);
    }
    
    renderFilms = () => {
        return this.props.films.map((item, id) => {
            return (
                <div key={id}>
                    <FilmItem 
                        id={item._id}
                        filmName={item.title} 
                        description={item.description} 
                        avatar={item.avatar} 
                        redirect={this.handleRedirect}
                    />
                </div>
            )
        });
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.title}>Film<span style={styles.styledWord}>MiX</span>  LIBRARY</div>
                <FilterContainer />
                <div style={styles.filmItemsWrapper}>
                    {this.renderFilms()}
                </div>
            </div> 
        )
    }
}


export default withRouter(connect(mapStateToProps, { getAllFilms })(FilmCollectionContainer));