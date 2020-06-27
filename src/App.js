import React, {Component} from 'react';
import './App.css';

import CardList from './Components/card-list/card-list.component.jsx';
//import Card from './Components/card/card.component.jsx';

class App extends Component  {

  constructor() {
    super();
    this.state = {suppliers: [
      {
        name:" Siglo 21",
        comision:"N/A",
        contractType:" Distribuidor",
        responsible:"Milena",
        telefono:"0998676573",
        credito:"Negativo"
      },
      {
        name:"RM",
        comision:"N/A",
        contractType:"Distribuidor",
        responsible:"sin definir",
        telefono:"0994104883",
        credito:"Positivo"
      },
      {
        name:"Shampoos de Aguacate",
        comision:"N/A",
        contractType:"Distribuidor",
        responsible:"Jorge Pino",
        telefono:"0980812628",
        credito:"Positivo"
      },
      {
        name:"VARIEDAD ONLINE",
        comision:"8%-20%",
        contractType:"Profesional",
        responsible:"IVAN FAJARDO",
        telefono:"0980812628",
        credito:"Positivo"
      },
      {
        name:"LUIS HERNANDEZ LR",
        comision:"8%-20%",
        contractType:" Profesional",
        responsible:"Luis Hernandez",
        telefono:"0995082651",
        credito:"Positivo"
      },
      {
        name:"DEAL ELECTRONIC",
        comision:"N/A",
        contractType:"Distribuidor",
        responsible:"Sin definir",
        telefono:"0990699733",
        credito:"Positivo"
      },
      {
        name:"TEst",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },
      {
        name:"",
        comision:"",
        contractType:"",
        responsible:"",
        telefono:"",
        credito:""
      },

    
    ]
  };

  };

// componentDidMount() {
// fetch ("http://spreadsheets.google.com/feeds/list/149E4AoK53N521sKmLt4RCtFEBY8CIvs2YH48Cp8Sp88/od6/public/values?alt=json")
// .then(response => response.json())
// .then(suppliers => this.setState({suppliers:suppliers}));
// };




  render() {


    return (
      <div className="App">
      <h1 style={{color: "white"}}> Directorio de Kartyy <img alt='logo' src='../public/apple-icon.png'/></h1>
        <CardList suppliers={this.state.suppliers}/>
      </div>
    );

  }
}
export default App;
