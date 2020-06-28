import React, {Component} from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component.jsx';
import Background from './Components/background/background.component.jsx';
import Navigation from './Components/navigation/navigation.component.jsx';
import data from './data/data.json';
class App extends Component  {

  constructor() {
    super();
    this.state = {
      suppliers: data,
      searchField:''
  }

  };

// componentDidMount() {
// fetch ("./data/data.json")
// .then(response => response.json())
// .then(suppliers => this.setState({suppliers:suppliers}));
// };

handleChange = (event) => {
  this.setState({searchField: event.target.value})
};
  render() {
const { suppliers , searchField} = this.state;
const filteredSuppliers = suppliers.filter(supplier => 
  supplier.name.toLowerCase().includes(searchField.toLowerCase())
);  

    return (
      
      <div className="App">
        <Background />
        <Navigation changes={this.handleChange} />
        <CardList filtered={filteredSuppliers} />
      </div>
    );

  }
}
export default App;
