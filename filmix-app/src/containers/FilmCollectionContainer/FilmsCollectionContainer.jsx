import React from 'react';
import FilmItem from '../../views/FilmItem/FilmItem';
import Image_1 from '../../images/download.jpg';
import Image_2 from '../../images/download_1_.jpg';
import Image_3 from '../../images/download_2_.jpg';
import { styles } from './styles';
import FilterContainer from '../FilterContainer';


class FilmCollectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
                {image: Image_1, title: 'Film_1'},
                {image: Image_2, title: 'Film_2'},
                {image: Image_3, title: 'Film_3'},
            ]
        }
    }

    renderFilms = () => {
        return this.state.films.map((item, id) => {
            return (
                <div key={id}>
                    <FilmItem filmImage={item.image} filmName={item.title}/>
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


export default FilmCollectionContainer;