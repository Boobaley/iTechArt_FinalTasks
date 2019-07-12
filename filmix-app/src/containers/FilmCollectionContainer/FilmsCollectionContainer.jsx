import React, { Component } from 'react';
import FilmItem from '../../views/FilmItem/FilmItem';
import { connect } from 'react-redux';
import { getAllFilms } from '../../redux/actions/actionCreator';
import { styles } from './styles';
import Filter  from '../../views/Filter/Filter';
import{ withRouter } from 'react-router-dom';
import { Spinner } from '../../views/Spinner/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'; 

const mapStateToProps = state => {
    return {
        films: state.films.films,
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
        this.loadFilms();
    }

    loadFilms = () => {
        const counter =  this.props.films.length / 27 + 1 
        this.props.getAllFilms(counter);
    }

    handleRedirect = (id) => {
        this.props.history.push(`/films/${id}`);
    }
        
    renderFilms = (categoryId) => {
        return this.props.films
        .filter(this.state.selectedValue !== 'all' ? item => item.categoryId === categoryId : item => item)
        .map((item, id) => {
            return (
                <div key={id}>
                    <FilmItem 
                        {...item}
                        redirect={this.handleRedirect}
                    />
                </div>
            )
        });
    }

    handleFilterChange = (event) => {
        this.setState({ selectedValue: event.target.value })
    }

    getFilms = () => {
        switch(this.state.selectedValue) {
            case 'all': return this.renderFilms();
            case 'comedies': return this.renderFilms(2);
            case 'horrors': return this.renderFilms(3);
            case 'fantasy': return this.renderFilms(1);
            default: return this.renderFilms();
        }
    }

    render() {
        if (this.props.films.length === 0) {
            return <Spinner/>
        }

        return (
            <div style={styles.wrapper}>
                <div style={styles.titleWrapper}>
                    <div style={styles.title}>Film<span style={styles.styledWord}>MiX</span> LIBRARY</div>
                    <Filter checkValue={this.checkValue} current={this.state.selectedValue} onFilterChange={this.handleFilterChange}/>
                </div>
                <InfiniteScroll 
                    dataLength={this.props.films.length}
                    next={this.loadFilms}
                    hasMore={true}
                    style={{ overflow: 'inherit' }}
                >
                    <div style={styles.filmItemsWrapper}>
                        {this.getFilms()}
                    </div>
                </InfiniteScroll>
            </div> 
        )
    }
}


export default withRouter(connect(mapStateToProps, { getAllFilms })(FilmCollectionContainer));

