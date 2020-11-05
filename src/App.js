import React, { Component } from 'react';
import './App.css';
import List from './composition/List';

class App extends Component {
  state = {
    lists: [
      { 
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  omit = (obj, keyToOmit) => {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  deleteCard = (card) => {
    const newLists = this.state.lists.map(list => {
      return {
        id: list.id,
        header: list.header,
        cardIds: list.cardIds.filter(crd => crd !== card),
      };
    });
    
    const cardObj = this.state.allCards[card];

    const newAllCards = this.omit(this.state.allCards, cardObj.id);


    this.setState({
      lists: newLists,
      allCards: newAllCards,
    });
  }

  addRandomCard = (listId, newCard) => {
    const id = listId;
    const nId = newCard.id;
    const nCard = newCard;

    const newLists = this.state.lists.map(list => {
      if (list.id === id) {
        list.cardIds.push(nCard.id);
        return list;
      } else {
        return list;
      }
    });

    const newAllCards = { ...this.state.allCards, [nId]: nCard};

    this.setState({
      lists: newLists,
      allCards: newAllCards,
    });
  }

  render() {
    const {lists, allCards} = this.state;

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {lists
            .map(list => <List id={list.id} key={`List_${list.id}`} header={list.header} cards={list.cardIds
              .map(id => allCards[id])} deleteCard={this.deleteCard} addRandomCard={this.addRandomCard} />)
          }
        </div>
      </main>
    );
  }
}

export default App;
