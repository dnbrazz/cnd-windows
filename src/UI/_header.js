import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { Col, Row } from 'antd'
import Paper from 'material-ui/Paper'
import ActionAlarm from 'material-ui/svg-icons/action/alarm'
import ActionToday from 'material-ui/svg-icons/action/today'
import CommunicationCall from 'material-ui/svg-icons/communication/call'
import CommunicationEmail from 'material-ui/svg-icons/communication/email'
import Camera from 'material-ui/svg-icons/image/photo-camera'
import Home from 'material-ui/svg-icons/action/home'
import { artBackBlack, artTextWhite, menu, contact } from '../Components/constructor/_const'

const stildual = {
  color: '#222',
  fontSize: '16px'
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
      fontSize: '',
      letterSpacing: '',
      iconSize: '',
      paddingTop: ''
    }
  }

  componentWillMount () {
    if (this.props.SM) {
      this.setState({
        fontSize: '12px',
        letterSpacing: '0px',
        iconSize: '15px',
        paddingTop: '15px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '5px'
      })
    } else {
      this.setState({
        fontSize: '15px',
        letterSpacing: '2px',
        iconSize: '20px',
        paddingTop: '25px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '25px'
      })
    }
  }

  render () {
    return (
      <div>
        <Row style={artBackBlack} type='flex' align='middle'>
          <Col xs={11} sm={12} md={12} style={{ padding: 10, paddingLeft: 17}}>
            <div className='logo' />
          </Col>
          <Col xs={13} sm={6} md={6} style={{ padding: 10 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: artBackBlack.backgroundColor, padding: '5px' }}>
              <Row style={{ fontSize: this.state.fontSize, padding: 0 }}>
                <CommunicationCall style={{ height: this.state.iconSize, paddingTop: 5 }} /> {contact.phone + ' (' + contact.carrier + ')'}
              </Row>
              <Row style={{ fontSize: this.state.fontSize, padding: 0 }}>
                <CommunicationEmail style={{ height: this.state.iconSize, paddingTop: 5 }} /> {contact.mail}
              </Row>
            </Paper>
          </Col>
          <Col xs={0} sm={6} md={6} style={{ padding: 10 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: artBackBlack.backgroundColor, padding: '5px' }}>
              <Row style={{ fontSize: this.state.fontSize, padding: 0 }}>
                <ActionAlarm style={{ height: this.state.iconSize, paddingTop: 5 }} /> Program
              </Row>
              <Row style={{ fontSize: this.state.fontSize, padding: 0 }}>
                <ActionToday style={{ height: this.state.iconSize, paddingTop: 5 }} /> {'L - V : ' + contact.openfrom + ' - ' + contact.opento}
              </Row>
            </Paper>
          </Col>
        </Row>
        <Row type='flex' style={artBackBlack}>
          <Col style={style2} xs={24} sm={24} md={6} lg={6} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={{ backgroundColor: '#ffc81c' }} inkBarStyle={{ backgroundColor: '#222' }} contentContainerStyle={{ color: '#777' }}>
              <Tab value={0} style={stildual} icon={<Home style={{ height: this.state.fontSize }} />} />
              <Tab value={1} style={stildual} icon={<Camera style={{ height: this.state.fontSize }} />} />
              <Tab value={9} style={stildual} icon={<CommunicationCall style={{ height: this.state.fontSize }} />} />
            </Tabs>
          </Col>
          <Col style={style2} xs={24} sm={24} md={18} lg={18} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={artBackBlack} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
              <Tab label={menu['1']} value={2} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label={menu['2']} value={3} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label={menu['3']} value={4} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label={menu['4']} value={5} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
