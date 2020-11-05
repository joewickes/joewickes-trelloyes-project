import React from 'react';
import './Card.css';

class CardClass extends React.Component {
  
  render() {
    const {title, content, deleteCard, id} = this.props;

    return (
      <div className="Card">
        <button type="button" id={id} onClick={(e) => deleteCard(e.target.id)}>delete</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default CardClass;