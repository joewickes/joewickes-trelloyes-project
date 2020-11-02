import './Card.css';

function Card(props) {
  const {title, content} = props;

  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;