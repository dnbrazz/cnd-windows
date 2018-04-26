import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Plase from './_plase'
import Glafuri from './_rulouri'
import SwipeableViews from 'react-swipeable-views'
import { menu, artBackBlack } from '../constructor/_const'

class Accesorii extends Component {
  constructor () {
    super()
    this.state = {
      slideIndex: 0,
      animate: false
    }
    this.onClick = this.handleChange.bind(this)
  }

    handleChange = (value) => {
      this.setState({
        slideIndex: value
      })
    }

    render () {
      return (
        <div style={artBackBlack}>
          <Row type='flex' style={artBackBlack}>
            <Col className='tab_accesorii' sm={12} md={12} lg={12} >
              <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabItemContainerStyle={artBackBlack} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
                <Tab label={menu['5']} value={0} className='menu_tab' />
                <Tab label={menu['6']} value={1} className='menu_tab' />
              </Tabs>
            </Col>
          </Row>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={artBackBlack} animateHeight={this.state.animate}>
            <Plase loaded={() => { this.setState({animate: true}) }} />
            <Glafuri />
          </SwipeableViews>
        </div>
      )
    }
}

export default Accesorii
