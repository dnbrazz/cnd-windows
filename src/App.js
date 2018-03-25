import React, { Component } from 'react'
import Headroom from 'react-headroom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { Layout } from 'antd'
import Cont from './UI/_content.js'
import Foot from './UI/_footer.js'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
        paginaAfisata: 'Acasa'
    };
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(params) {
    this.setState({...this.state, paginaAfisata: params})
  }

  renderSwitch() {
		switch(this.state.paginaAfisata) {
      case "Acasa": 
        return <Cont info = 'Acasa'/>
      case "Portofoliu": 
        return <Cont info = 'Portofoliu'/>
      case "Tamplarie": 
        return <Cont info = 'Tamplarie'/>
      case "Usi": 
        return <Cont info = 'Usi'/>
      case "Cortine": 
        return <Cont info = 'Cortine'/>
      case "Accesorii": 
        return <Cont info = 'Accesorii'/>
      case "Contact": 
        return <Cont info = 'Contact'/>
			default: {
				break
			}
    }
  }

  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Headroom>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div className='logo'>
                <div className='headLogo'></div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={'Acasa'} onSelect={ this.onClick }>
                Acasa
              </NavItem>
              <NavItem eventKey={'Portofoliu'} onSelect={ this.onClick }>
                Portofoliu
              </NavItem>
              <NavDropdown title='Servicii' id='basic-nav-dropdown'>
                <MenuItem eventKey={'Tamplarie'} onSelect={ this.onClick }> Tamplarie PVC
                </MenuItem>
                <MenuItem eventKey={'Usi'} onSelect={ this.onClick }> Usi Interioare / Exterioare
                </MenuItem>
                <MenuItem eventKey={'Cortine'} onSelect={ this.onClick }> Pereti Cortina
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={'Accesorii'} onSelect={ this.onClick }> Accesorii
                </MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={'Contact'} onSelect={ this.onClick }>
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
        <Layout>
        {this.renderSwitch()}
        </Layout>
        <Foot />
      </Layout>
    )
  }
}

export default App
