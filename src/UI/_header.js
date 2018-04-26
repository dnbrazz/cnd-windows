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
import { artBackBlack, menu, contact } from '../Components/constructor/_const'

class Head extends Component {
  render () {
    return (
      <div>
        <Row style={artBackBlack} type='flex' align='middle' justify='center'>
          <Col xs={11} sm={7} md={7} lg={12} style={{ padding: 10, paddingLeft: 17 }}>
            <div className='logo' />
          </Col>
          <Col xs={13} sm={9} md={10} lg={6} style={{ padding: 5 }}>
            <Paper zDepth={1} rounded={false} className='header_paper'>
              <Row className='header_contact_row'>
                <CommunicationCall className='header_contact_icon' /> <span>{contact.phone + ' (' + contact.carrier + ')'}</span>
              </Row>
              <Row className='header_contact_row'>
                <CommunicationEmail className='header_contact_icon' /> <span>{contact.mail}</span>
              </Row>
            </Paper>
          </Col>
          <Col xs={0} sm={8} md={7} lg={6} style={{ padding: 10 }}>
            <Paper zDepth={1} rounded={false} className='header_paper'>
              <Row className='header_contact_row'>
                <ActionAlarm className='header_contact_icon' /> <span>Program</span>
              </Row>
              <Row className='header_contact_row'>
                <ActionToday className='header_contact_icon' /> <span>{'L - V : ' + contact.openfrom + ' - ' + contact.opento}</span>
              </Row>
            </Paper>
          </Col>
        </Row>
        <Row type='flex' style={artBackBlack}>
          <Col className='bara_meniu' xs={24} sm={24} md={6} lg={6} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={{ backgroundColor: '#ffc81c' }} inkBarStyle={artBackBlack} contentContainerStyle={{ color: '#777' }}>
              <Tab value={0} icon={<Home />} />
              <Tab value={1} icon={<Camera />} />
              <Tab value={9} icon={<CommunicationCall />} />
            </Tabs>
          </Col>
          <Col className='bara_meniu' xs={24} sm={24} md={18} lg={18} >
            <Tabs onChange={this.props.handleChange} value={this.props.slideIndex} tabItemContainerStyle={artBackBlack} inkBarStyle={{ backgroundColor: '#ffc81c' }}>
              <Tab className='menu_tab' label={menu['1']} value={2} />
              <Tab className='menu_tab' label={menu['2']} value={3} />
              <Tab className='menu_tab' label={menu['3']} value={4} />
              <Tab className='menu_tab' label={menu['4']} value={5} />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Head
