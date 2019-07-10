import React, { Component } from 'react';
import FilmItem from '../../views/FilmItem/FilmItem';
import { connect } from 'react-redux';
import { getAllFilms } from '../../redux/actions/actionCreator';
import { styles } from './styles';
import Filter  from '../../views/Filter/Filter';
import{ withRouter } from 'react-router-dom';
import { Spinner } from '../../views/Spinner/Spinner';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        loading: state.films.loading,
    }
}

class FilmCollectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'all',
        }
    }

    componentDidMount() {
        this.props.getAllFilms();
    }

    handleRedirect = (id) => {
        this.props.history.push(`/films/${id}`);
    }
        
    renderAllFilms = () => {
        return this.props.films.map((item, id) => {
            return (
                <div key={id}>
                    <FilmItem 
                        id={item._id}
                        filmName={item.title} 
                        description={item.description} 
                        avatar={item.avatar}
                        category={item.categoryId}
                        redirect={this.handleRedirect}
                    />
                </div>
            )
        });
    }

    renderComedies = () => {
        return this.props.films
            .filter(item => item.categoryId === 2)
            .map((item, id) => {
                return (
                    <div key={id}>
                        <FilmItem 
                            id={item._id}
                            filmName={item.title} 
                            description={item.description} 
                            avatar={item.avatar}
                            category={item.categoryId}
                            redirect={this.handleRedirect}
                        />
                    </div>
                )
            });
    }

    renderHorrors = () => {
        return this.props.films
            .filter(item => item.categoryId === 3)
            .map((item, id) => {
                return (
                    <div key={id}>
                        <FilmItem 
                            id={item._id}
                            filmName={item.title} 
                            description={item.description} 
                            avatar={item.avatar}
                            category={item.categoryId}
                            redirect={this.handleRedirect}
                        />
                    </div>
                )
            });
    }

    renderFantasy = () => {
        return this.props.films
            .filter(item => item.categoryId === 1)
            .map((item, id) => {
                return (
                    <div key={id}>
                        <FilmItem 
                            id={item._id}
                            filmName={item.title} 
                            description={item.description} 
                            avatar={item.avatar}
                            category={item.categoryId}
                            redirect={this.handleRedirect}
                        />
                    </div>
                )
            });
    }

    handleFilterChange = (event) => {
        this.setState({ selectedValue: event.target.value })
    }

    filter = () => {
        switch(this.state.selectedValue) {
            case 'all': return this.renderAllFilms();
            case 'comedies': return this.renderComedies();
            case 'horrors': return this.renderHorrors();
            case 'fantasy': return this.renderFantasy();
            default: return this.renderAllFilms();
        }
    }

    render() {
        if (this.props.loading) {
            return <Spinner/>
        }

        return (
            <div style={styles.wrapper}>
                <div style={styles.titleWrapper}>
                    <div style={styles.title}>Film<span style={styles.styledWord}>MiX</span> LIBRARY</div>
                    <Filter checkValue={this.checkValue} current={this.state.selectedValue} onFilterChange={this.handleFilterChange}/>
                </div>
                <div style={styles.filmItemsWrapper}>
                    {this.filter()}
                </div>
            </div> 
        )
    }
}


export default withRouter(connect(mapStateToProps, { getAllFilms })(FilmCollectionContainer));

