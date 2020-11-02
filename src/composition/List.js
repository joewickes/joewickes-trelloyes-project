import './List.css';
import Card from './Card';

function List(props) {
  const {header, cards} = props;

  // Map through the cards to return each one 

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

export default List;