import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Plase from './_plase'
import Glafuri from './_rulouri'
import SwipeableViews from 'react-swipeable-views'
import { menu } from '../constructor/_const'

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
      animate: false
    }
    this.onClick = this.handleChange.bind(this)
  }

    handleChange = (value) => {
      this.setState({
        slideIndex: value
      })
    }

    componentWillMount () {
      if (this.props.SM) {
        this.setState({
          fontSize: '12px',
          letterSpacing: '0px',
          fontSizeStep: '18px',
          iconSize: '15px'
        })
      } else {
        this.setState({
          fontSize: '15px',
          letterSpacing: '2px',
          fontSizeStep: '30px',
          iconSize: '20px'
        })
      }
    }

    render () {
      const stil = {
        color: '#fff',
        fontSize: this.state.fontSize,
        textTransform: 'none',
        letterSpacing: this.state.letterSpacing
      }
      return (
        <div style={style}>
          <Row type='flex' style={style}>
            <Col style={style2} sm={12} md={12} lg={12} >
              <Tabs onChange={this.handleChange} value={this.state.slideIndex} tabItemContainerStyle={style} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
                <Tab label={menu['5']} value={0} style={stil} />
                <Tab label={menu['6']} value={1} style={stil} />
              </Tabs>
            </Col>
          </Row>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={style} animateHeight={this.state.animate}>
            <Plase SM={this.props.SM} loaded={() => { this.setState({animate: true}) }} />
            <Glafuri SM={this.props.SM} />
          </SwipeableViews>
        </div>
      )
    }
}

export default Accesorii
