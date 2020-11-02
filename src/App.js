import './App.css';
import List from './composition/List';

function App(props) {
  const {store} = props;

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists
          .map(list => <List key={`List_${list.id}`} id={list.id} header={list.header} cards={list.cardIds
            .map(id => store.allCards[id])} />)
        }
      </div>
    </main>
  );
}

export default App;
