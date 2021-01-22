import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');


const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-content">
          <div className="item-author">{`${item.firstName} ${item.lastName}`}</div>
        </div>
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
        </div>
        <div className="delete-perfomers">
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
