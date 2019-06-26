import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SimpleSlider from '../views/Slider/Slider';

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
                            <SimpleSlider/>
                        </div>

                        
                    }
                />
                <Route
                    path='/films'
                    render={() =>
                        <div>
                            <HeaderContainer current={1}/>
                            <div>Films Route</div>
                        </div> 
                    }
                />
                <Route 
                    path='/categories'
                    render={() =>
                        <div>
                            <HeaderContainer current={2}/>
                            <div>Categories Route</div>
                        </div>
                    }
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;