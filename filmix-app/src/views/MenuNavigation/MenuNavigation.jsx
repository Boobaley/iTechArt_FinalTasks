import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const MenuNavigation = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.current);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <div>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              indicatorColor='none'
            >
                <Tab 
                    label={ <span className={classes.tabText}>Home</span> } 
                    className={classes.tab}
                    component={Link}
                    to='/'
                />
                <Tab 
                    label={ <span className={classes.tabText}>Films</span> } 
                    component={Link}
                    to='/films'
                />
                <Tab 
                    label={ <span className={classes.tabText}>Categories</span> }
                    component={Link}
                    to='categories'
                />
            </Tabs>
        </div>    
    );
}

export default MenuNavigation;