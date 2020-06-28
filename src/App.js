import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ '

import CardList from './Components/card-list/card-list.component.jsx';
import Sky from 'react-sky';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//import Card from './Components/card/card.component.jsx';

class App extends Component  {

  constructor() {
    super();
    this.state = "./Components/data/data.json"

  };

// componentDidMount() {
// fetch ("http://spreadsheets.google.com/feeds/list/149E4AoK53N521sKmLt4RCtFEBY8CIvs2YH48Cp8Sp88/od6/public/values?alt=json")
// .then(response => response.json())
// .then(suppliers => this.setState({suppliers:suppliers}));
// };




  render() {


    return (
      
      <div className="App">
      <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">
      <h3 style={{color: "white"}}><img className= 'App-logo' alt='logo' src={require("./assets/logo-white/blanco.png")}/>| Directorio Kartyy </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
      <Sky
      images={{
        0:require("./assets/background120w/gate, border, barrier, wireless, arrow, move_120px.png"),
        1:require("./assets/background120w/air conditioner, ac, home, appliance, wireless, remote, control_120px.png"),
        2:require("./assets/background120w/alert, warning, danger, exclaimation, siren_120px.png"),
        3:require("./assets/background120w/battery, charge, power, energy, home, house, smart home_120px.png"),
        4:require("./assets/background120w/door, front, entrance, exit, wireless, keypad, home_120px.png"),
        5:require("./assets/background120w/gear, settings, options, preferences, wireless, house, home_120px.png"),
        6:require("./assets/background120w/humidifier, air, humid, electronic, device, wireless, control_120px.png"),
        7:require("./assets/background120w/keypad, door handle, door, entrance, wireless_120px.png"),
        8:require("./assets/background120w/microwave, oven, kitchen, appliance, wireless, cooking_120px.png"),
        9:require("./assets/background120w/preferences, options, settings, smart home, home, house, smartphone_120px.png"),
        10:require("./assets/background120w/smartphone, smart home, home, house, control, wireless_120px.png"),
        11:require("./assets/background120w/speaker, ai, electronic, device, alexa, sound, audio_120px.png"),
        12:require("./assets/background120w/website, browser, webpage, smart home, home, house, connect_120px.png"),
        13:require("./assets/background120w/wireless, lightbulb, light, lighting, home, house, smart home_120px.png"),
        14:require("./assets/background120w/garden, gardening, plants, watering, wireless, smart home_120px.png"),
        15:require("./assets/background120w/garden, plant, growth, power, energy, home, house_120px.png"),
        16:require("./assets/background120w/lock, protection, privacy, confirm, smartphone, house, home_120px.png"),
        17:require("./assets/background120w/modem, wireless, internet, electronic, device_120px.png"),
        18:require("./assets/background120w/radiator, heater, electronic, appliance, wireless, control_120px.png"),
        19:require("./assets/background120w/security, camera, protection, surveillance, electronic, device, wireless_120px.png"),
        20:require("./assets/background120w/security, protection, shield, confirm, complete, house, home_120px.png"),
      }}
      how={100} /* Pass the number of images Sky will render chosing randomly */
      time={60} /* time of animation */
      size={'50px'} /* size of the rendered images */
      />
        <CardList suppliers={this.state.suppliers}/>
      </div>
    );

  }
}
export default App;
