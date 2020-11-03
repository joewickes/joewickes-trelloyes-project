import React from 'react';
import './List.css';
import Card from './Card';

class ListClass extends React.Component {
  static defaultProps = {
    header: 'Title',
    cards: [{
      id: '',
      title: '',
      content: '',
    },{

    }]
  };
  
  render() {
    const {header, cards} = this.props;

    return (
      <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
          {cards.map((card) => <Card key={card.id} title={card.title} content={card.content} />)}
          <button type="button" className="List-add-button">
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}


export default ListClass;