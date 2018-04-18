import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Plase from './categorii/_plase'
import Glafuri from './categorii/_rulouri'
import Praguri from './categorii/_praguri'
import SwipeableViews from 'react-swipeable-views'

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
      animateHeight: false
    }
    this.onClick = this.handleChange.bind(this)
  }

    handleChange = (value) => {
      this.setState({
        slideIndex: value
      })
    }

    componentDidMount () {
      this.setState({animateHeight: true})
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
                <Tab label='Plase insecte / Glafuri' value={0} style={stil} />
                <Tab label='Rulouri / Usi de garaj' value={1} style={stil} />
                <Tab label='Praguri' value={2} style={stil} />
              </Tabs>
            </Col>
          </Row>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={style} animateHeight={this.state.animateHeight}>
            <Plase SM={this.props.SM} />
            <Glafuri SM={this.props.SM} />
            <Praguri SM={this.props.SM} />
          </SwipeableViews>
        </div>
      )
    }
}

export default Accesorii
