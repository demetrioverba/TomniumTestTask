import React from 'react';
import RenderItem from './RenderItem'

const renderList = (props) => {

  return (
    <div>
      {Object.keys(props.data.rates).map((item, i) => (<RenderItem key={i} rate={item} cost={props.data.rates[item]} />))
      }
    </div>
  );
};

export default renderList;