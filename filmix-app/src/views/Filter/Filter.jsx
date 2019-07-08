import React from 'react';
import Radio from '@material-ui/core/Radio';
import { useStyles } from './styles'; 

export default function RadioButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
    <label className={classes.label}>All</label>
      <Radio
        checked={props.current === 'all'}
        onChange={props.onFilterChange}
        value="all"
        className={classes.radioButton}
      />
      <label className={classes.label}>Comedies</label>
      <Radio
        checked={props.current === 'comedies'}
        onChange={props.onFilterChange}
        value="comedies"
        className={classes.radioButton}
      />
       <label className={classes.label}>Horrors</label>
      <Radio
        checked={props.current === 'horrors'}
        onChange={props.onFilterChange}
        value="horrors"
        className={classes.radioButton}
      />
       <label className={classes.label}>Fantasy</label>
      <Radio
        checked={props.current === 'fantasy'}
        onChange={props.onFilterChange}
        value="fantasy"
        className={classes.radioButton}
      />
    </div>
  );
}