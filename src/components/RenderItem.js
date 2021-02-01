import React from 'react';
import classes from './RenderItem.module.css';

const renderItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.rates}>{props.rate}</div>
      <div className={classes.cost}>{props.cost.toFixed(2)}</div>
    </div>
  );
}
export default renderItem;