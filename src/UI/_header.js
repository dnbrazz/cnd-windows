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
import { textLG, textSM, artBackBlack, artTextWhite } from '../Components/constructor/_const'

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
        paddingTop: '25px',
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

  componentDidMount () {
    if (this.props.SM) {
      this.setState({screenWidth: textSM.size, letterSpacing: textSM.spacing})
    } else {
      this.setState({screenWidth: textLG.size, letterSpacing: textLG.spacing})
    }
    console.log(this.props.SM)
  }
  render () {
    return (
      <div>
        <Row style={artBackBlack} type='flex'>
          <Col xs={5} sm={4} md={4} style={{ paddingLeft: this.state.paddingLeft, paddingRight: this.state.paddingRight, paddingTop: this.state.paddingTop, paddingBottom: this.state.paddingBottom }}>
            <div className='logo' />
          </Col>
          <Col xs={7} sm={4} md={4} style={{ padding: 15 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: '#222', padding: '10px' }}>
              <Row style={{ fontSize: this.state.fontSize, backgroundColor: '#222' }}>
                <CommunicationCall style={{ height: this.state.iconSize, paddingTop: '5px' }} /> 0722.222.222
              </Row>
              <Row style={{ fontSize: this.state.fontSize, backgroundColor: '#222' }}>
                <CommunicationEmail style={{ height: this.state.iconSize, paddingTop: '5px' }} /> info@cndwindows.ro
              </Row>
            </Paper>
          </Col>
          <Col xsHidden sm={4} md={4} style={{ padding: 15 }}>
            <Paper zDepth={1} rounded={false} style={{ backgroundColor: artBackBlack.backgroundColor, padding: '10px' }}>
              <Row style={{ fontSize: this.state.fontSize, backgroundColor: artBackBlack.backgroundColor }}>
                <ActionAlarm style={{ height: this.state.iconSize, paddingTop: '5px' }} /> Program
              </Row>
              <Row style={{ fontSize: this.state.fontSize, backgroundColor: artBackBlack.backgroundColor }}>
                <ActionToday style={{ height: this.state.iconSize, paddingTop: '5px' }} /> L - V : 07:00 - 16:00
              </Row>
            </Paper>
          </Col>
        </Row>
        <Row type='flex' style={artBackBlack}>
          <Col style={style2} xs={12} sm={12} md={3} lg={3} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={{ backgroundColor: '#ffc81c' }} inkBarStyle={{ backgroundColor: '#222' }} contentContainerStyle={{ color: '#777' }}>
              <Tab value={0} style={stildual} icon={<Home style={{ height: this.state.fontSize }} />} />
              <Tab value={1} style={stildual} icon={<Camera style={{ height: this.state.fontSize }} />} />
              <Tab value={9} style={stildual} icon={<CommunicationCall style={{ height: this.state.fontSize }} />} />
            </Tabs>
          </Col>
          <Col style={style2} xs={12} sm={12} md={9} lg={9} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={artBackBlack} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
              <Tab label='Tamplarie PVC' value={2} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label='Accesorii' value={3} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label='Compartimentari' value={4} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
              <Tab label='Pereti Cortina' value={5} style={{fontSize: this.state.fontSize, letterSpacing: this.state.letterSpacing, color: artTextWhite.color, textTransform: 'none'}} />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
