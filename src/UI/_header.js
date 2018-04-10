import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'react-bootstrap'
import Paper from 'material-ui/Paper'
import ActionAlarm from 'material-ui/svg-icons/action/alarm'
import ActionToday from 'material-ui/svg-icons/action/today'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import Camera from 'material-ui/svg-icons/image/photo-camera'
import Home from 'material-ui/svg-icons/action/home'

const stildual = {
  color: '#222',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',
  letterSpacing: '2px'
}
const style = {
  // borderBottom: '1px solid #000',
  // borderTop: '1px solid #000',
  backgroundColor: '#222'
}
const style2 = {
  borderBottom: '1px solid #000',
  borderTop: '2px solid #ffc81c',
  backgroundColor: '#222',
  padding: '0'
}

class Head extends Component {
  constructor () {
    super()
    this.state = {
      screenWidth: 12
    }
  }

  componentDidMount () {
    let width = window.innerWidth
    if (width <= 992) {
      this.setState({screenWidth: 12})
    } else {
      this.setState({screenWidth: 15})
    }
  }

  render () {
    const stil = {
      color: '#fff',
      fontSize: this.state.screenWidth,
      textTransform: 'none',
      letterSpacing: '1px'
    }

    return (
      <div>
        <Row style={style} type='flex'>
          <Col xs={6} sm={4} md={4} style={{ padding: 25, paddingLeft: 45 }}>
            <div className='logo' />
          </Col>
          <Col xs={6} sm={4} md={4} style={{ padding: 15 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: '#222', padding: '10px' }}>
              <Row style={{ fontSize: '15px', backgroundColor: '#222' }}>
                <CommunicationCall style={{ height: '20px', paddingTop: '5px' }} /> 0722.222.222
              </Row>
              <Row style={{ fontSize: '15px', backgroundColor: '#222' }}>
                <CommunicationEmail style={{ height: '20px', paddingTop: '5px' }} /> info@cndwindows.ro
              </Row>
            </Paper>
          </Col>
          <Col xsHidden sm={4} md={4} style={{ padding: 15 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: '#222', padding: '10px' }}>
              <Row style={{ fontSize: '15px', backgroundColor: '#222' }}>
                <ActionAlarm style={{ height: '20px', paddingTop: '5px' }} /> Program
              </Row>
              <Row style={{ fontSize: '15px', backgroundColor: '#222' }}>
                <ActionToday style={{ height: '20px', paddingTop: '5px' }} /> L - V : 07:00 - 16:00
              </Row>
            </Paper>
          </Col>
        </Row>
        <Row type='flex' style={style}>
          <Col style={style2} xs={12} sm={12} md={3} lg={3} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={{ backgroundColor: '#ffc81c' }} inkBarStyle={{ backgroundColor: '#222' }} contentContainerStyle={{ color: '#777' }}>
              <Tab value={0} style={stildual} icon={<Home style={{ height: '15px', paddingTop: '5px' }} />} />
              <Tab value={1} style={stildual} icon={<Camera style={{ height: '15px', paddingTop: '5px' }} />} />
              <Tab value={9} style={stildual} icon={<CommunicationCall style={{ height: '15px', paddingTop: '5px' }} />} />
            </Tabs>
          </Col>
          <Col style={style2} xs={12} sm={12} md={9} lg={9} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={{ backgroundColor: '#222' }} inkBarStyle={{ backgroundColor: '#ffc81c' }} contentContainerStyle={{ color: '#777' }}>
              <Tab className='menu_label' label='Tamplarie PVC' value={2} style={stil} />
              <Tab className='menu_label' label='Accesorii' value={3} style={stil} />
              <Tab className='menu_label' label='Compartimentari' value={4} style={stil} />
              <Tab className='menu_label' label='Pereti Cortina' value={5} style={stil} />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
