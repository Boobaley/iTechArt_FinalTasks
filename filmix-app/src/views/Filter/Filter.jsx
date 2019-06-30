import React from 'react';
import Radio from '@material-ui/core/Radio';
import { useStyles } from './styles'; 

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('all');
  const classes = useStyles();

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div className={classes.wrapper}>
    <label className={classes.label}>All</label>
      <Radio
        checked={selectedValue === 'all'}
        onChange={handleChange}
        value="all"
        className={classes.radioButton}
      />
      <label className={classes.label}>Comedies</label>
      <Radio
        checked={selectedValue === 'comedies'}
        onChange={handleChange}
        value="comedies"
        className={classes.radioButton}
      />
       <label className={classes.label}>Horrors</label>
      <Radio
        checked={selectedValue === 'horrors'}
        onChange={handleChange}
        value="horrors"
        className={classes.radioButton}
      />
       <label className={classes.label}>Fantasy</label>
      <Radio
        checked={selectedValue === 'fantasy'}
        onChange={handleChange}
        value="fantasy"
        className={classes.radioButton}
      />
    </div>
  );
}