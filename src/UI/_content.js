import React, { Component } from 'react'
import { Layout } from 'antd'
import Acasa from '../Components/_acasa.js'
import About from '../Components/_about.js'
import Portofoliu from '../Components/_portofoliu.js'
import Tamplarie from '../Components/_tamplarie.js'
import Usi from '../Components/_usi.js'
import Cortine from '../Components/_cortine.js'
import Accesorii from '../Components/_accesorii.js'
import Contact from '../Components/_contact.js'
const { Content } = Layout

class Head extends Component {
  constructor (props) {
    super(props)
    this.state = {
      paginaAfisata: this.props.info
    }
  }

  componentWillReceiveProps () {
  }

  componentDidMount () {
    this.setState({...this.state, paginaAfisata: this.props.info})
  }

  componentDidUpdate () {
  }

  renderSwitch () {
    switch (this.props.info) {
      case 'Acasa':
        return <Acasa handleClick={this.props.handleClick} />
      case 'About':
        return <About />
      case 'Portofoliu':
        return <Portofoliu />
      case 'Tamplarie':
        return <Tamplarie />
      case 'Usi':
        return <Usi />
      case 'Cortine':
        return <Cortine />
      case 'Accesorii':
        return <Accesorii />
      case 'Contact':
        return <Contact />
      default: {
        break
      }
    }
  }

  render () {
    return (
      <Content>
        {this.renderSwitch()}
      </Content>
    )
  }
}

export default Head
