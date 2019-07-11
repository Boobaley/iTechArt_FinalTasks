import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Slider from '../views/Slider/Slider';
import FilmItemContainer from '../containers/FilmCollectionContainer/FilmsCollectionContainer';
import SingleFilmContainer from '../containers/SingleFilmContainer.jsx';
import SignInFormContainer from '../containers/SignInFormContainer';
import { ErrorPage } from '../views/Error/ErrorPage';

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
                    component={SingleFilmContainer}
                />
                <Route 
                    exact
                    path='/login'
                    render={() =>
                        <div>
                            <SignInFormContainer signUpTracker={false}/>
                        </div>
                    }
                />
                <Route 
                    exact
                    path='/signup'
                    render={() =>
                        <div>
                            <SignInFormContainer signUpTracker={true}/>
                        </div>
                    }
                />
                <Route 
                    exact
                    path='*'
                    render={() =>
                        <div>
                            <HeaderContainer current={null}/>
                            <ErrorPage />
                        </div>
                    }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;