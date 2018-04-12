import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Plase from './categorii/_plase'
import Glafuri from './categorii/_glafuri'
import Praguri from './categorii/_praguri'
import SwipeableViews from 'react-swipeable-views'
import { textLG, textSM } from './constructor/_const'

const style2 = {
  borderBottom: '1px solid #000',
  backgroundColor: '#222',
  padding: '0'
}

const style = {
  backgroundColor: '#222'
}

class Accesorii extends Component {
  constructor () {
    super()
    this.state = {
      slideIndex: 0,
      screenWidth: 12,
      letterSpacing: '2px'
    }
    this.onClick = this.handleChange.bind(this)
  }

    handleChange = (value) => {
      this.setState({
        slideIndex: value
      })
    }

    componentWillReceiveProps () {

    }

    componentDidMount () {
      let width = window.innerWidth
      if (width < 992) {
        this.setState({screenWidth: textSM.size, letterSpacing: textSM.spacing})
      } else {
        this.setState({screenWidth: textLG.size, letterSpacing: textLG.spacing})
      }
    }

    componentDidUpdate () {

    }
    render () {
      const stil = {
        color: '#fff',
        fontSize: this.state.screenWidth,
        textTransform: 'none',
        letterSpacing: this.state.letterSpacing
      }
      return (
        <div style={style}>
          <Row type='flex' style={style}>
            <Col style={style2} sm={12} md={12} lg={12} >
              <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabItemContainerStyle={style} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
                <Tab label='Plase insecte' value={0} style={stil} />
                <Tab label='Glafuri' value={1} style={stil} />
                <Tab label='Praguri' value={2} style={stil} />
              </Tabs>
            </Col>
          </Row>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={style}>
            <Plase SM={this.props.SM} />
            <Glafuri />
            <Praguri />
          </SwipeableViews>
        </div>
      )
    }
}

export default Accesorii
