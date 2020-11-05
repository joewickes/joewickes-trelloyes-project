import React from 'react';
import './List.css';
import Card from './Card';

class ListClass extends React.Component {
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    };
  }

  render() {
    const {id, header, cards, deleteCard, addRandomCard} = this.props;

    return (
      <section className="List">
        <header className="List-header">
          <h2>{header}</h2>
        </header>
        <div className="List-cards">
          {cards.map((card) => <Card key={card.id} id={card.id} title={card.title} content={card.content} deleteCard={deleteCard} />)}
          <button id={id} type="button" className="List-add-button" onClick={(e) => addRandomCard(e.target.id, this.newRandomCard())}>
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}


export default ListClass;