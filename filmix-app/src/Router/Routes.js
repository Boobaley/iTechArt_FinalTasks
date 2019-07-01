import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Slider from '../views/Slider/Slider';
import FilmItemContainer from '../containers/FilmCollectionContainer/FilmsCollectionContainer';
import SingleFilmContainer from '../containers/SingleFilmContainer.jsx';

const Routes = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route 
                    exact
                    path='/'
                    render={() => 
                        <div>
                            <HeaderContainer current={0}/>
                            <Slider/>
                        </div>   
                    }
                />
                <Route
                    exact
                    path='/films'
                    render={() =>
                        <div>
                            <HeaderContainer current={1}/>
                            <FilmItemContainer/>
                        </div> 
                    }
                />
                <Route
                    path='/films/:filmId'
                    render={() => 
                        <div>
                            <HeaderContainer current={1}/>
                            <SingleFilmContainer/>
                        </div>
                    }
                />
                <Route 
                    path='/categories'
                    render={() =>
                        <div>
                            <HeaderContainer current={2}/>
                        </div>
                    }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;