import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        loading: state.films.loading
    }
}
// const classes = useStyles();
const styles = {
    wrapper: {
        position: 'relative'
    },
    input: {
        padding: 10,
        borderRadius: 5,
        border: 'none',
        outline: 0,
    },
    inputWrapper: {
        position: 'relative'
    },
    shadowDiv: {
        position: "absolute",
        width: 189,
        background: 'red',
    }
  };

class Search extends React.Component {
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
        return this.state.matches.map(film => {
            return <div onClick={() => this.props.history.push(`/films/${film._id}`)}>{film.title}</div>
        })
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <input 
                    type="text" 
                    style={styles.input}
                    placeholder='Search...'
                    value={this.state.searchTerms}
                    onChange={this.onInputChange}
                />
                <div style={styles.shadowDiv}>
                    {this.renderMatches()}
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Search)) ;