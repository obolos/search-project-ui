import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      library: [],
      searchField: ''      
    };
  }
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

  componentDidMount() {
    const proxyurl = "https://hidden-coast-89712.herokuapp.com/";
    const url = 'https://books-example.herokuapp.com/getall';
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(books => this.setState({library: books.filter(e => JSON.stringify(e.name)[2] && JSON.stringify(e.name) !== 'null')})
    )
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }
  

 render() {
  return (
    <div className="App">
     <CardList books={this.state.library}/>
    </div>
  );
 }
  
}

export default App;
