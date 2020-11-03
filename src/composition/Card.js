import React from 'react';
import './Card.css';

class CardClass extends React.Component {
  static defaultProps = {
    title: '',
    content: '',
  }
  
  render() {
    const {title, content} = this.props;

    return (
      <div className="Card">
        <button type="button">delete</button>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

export default CardClass;